// !!! DISCLAIMER
// !!! This service is used to mock notification data.
// !!! Normally, notification state should be kept on backend, but Vizbox is just mocking it.

import { Injectable, OnDestroy } from '@angular/core';
import {
  AvlNotification,
  AvlNotificationConnectionOptions,
  AvlNotificationsCount,
} from '@avl-interfaces/interfaces';
import {
  AvlAuthService,
  NotificationService,
  TranslationManagementService,
} from '@avl-services/ng-services';
import { Observable, Subject } from 'rxjs';
import { map, scan, takeUntil, tap } from 'rxjs/operators';
import { notificationEndpoint } from 'endpoint.config';
import { NOTIFICATION_TYPE_MAPPINGS } from './filter-notifications-pipe';

@Injectable({
  providedIn: 'root',
})
export class NotificationStateService implements OnDestroy {
  private endpoint = notificationEndpoint;
  private connectionOptions: AvlNotificationConnectionOptions = {
    accessToken: this.authService.currentUser?.access_token,
    connectionID: 'Starter Kit',
    metadata: {
      clientName: 'Starter Kit',
      language: this.tmService.language,
    },
  };

  private notificationSubject: Subject<AvlNotification> = new Subject();
  private destroyed$: Subject<void> = new Subject();

  public notifications: AvlNotification[] = [];
  public notification$: Observable<AvlNotification> = this.notificationSubject;

  public notificationsCount: AvlNotificationsCount = {
    warning: 0,
    info: 0,
    ok: 0,
    error: 0,
    unread: 0,
    read: 0,
    total: 0,
  };

  constructor(
    private notificationService: NotificationService,
    private tmService: TranslationManagementService,
    private authService: AvlAuthService
  ) {
    this.authService.isLoggedIn$
      .pipe(
        takeUntil(this.destroyed$),
        tap((isLoggedIn) => this.handleConnection(isLoggedIn))
      )
      .subscribe();
    this.subscribeToNotification();
  }

  private handleConnection(isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.connectionOptions.accessToken = this.authService.currentUser.access_token;
      this.notificationService.startConnection(this.endpoint, this.connectionOptions);
    } else {
      this.notificationService.removeConnection(this.connectionOptions.connectionID);
    }
  }

  public ngOnDestroy(): void {
    this.notificationService.removeConnection(this.connectionOptions.connectionID);
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public updateNotification(notification: AvlNotification): void {
    const index = this.notifications.findIndex((el) => el.id === notification.id);
    this.notifications[index].read = notification.read;
  }

  public markAllAsRead(): void {
    this.changeNotificationsReadStateTo(true);
  }

  public markAllAsUnread(): void {
    this.changeNotificationsReadStateTo(false);
  }

  public selectedStateChanged(
    currentNotifications: AvlNotification[],
    read: boolean,
    selectedNotifications: AvlNotification[]
  ): AvlNotification[] {
    this.notifications
      .filter((notification) => this.isNotificationInArray(notification, selectedNotifications))
      .forEach((notification) => (notification.read = read));

    // filter notifications which are currently displayed
    return this.notifications.filter((notification) =>
      this.isNotificationInArray(notification, currentNotifications)
    );
  }

  private changeNotificationsReadStateTo(read: boolean): void {
    this.notifications = [
      ...this.notifications.map((notification: AvlNotification) => {
        notification.read = read;
        return notification;
      }),
    ];
  }

  private isNotificationInArray(notification: AvlNotification, array: AvlNotification[]): boolean {
    return array.some((element) => notification.id === element.id);
  }

  private subscribeToNotification(): void {
    let count = 0;
    this.notificationService.notification$
      .pipe(
        takeUntil(this.destroyed$),
        map((notification: AvlNotification) => {
          return this.addMissingProperties(notification, ++count);
        }),
        tap((notification) => this.notificationSubject.next(notification)),
        scan(this.createNotificationList, [])
      )
      .subscribe((notifications: AvlNotification[]) => {
        this.setNotificationListAndCount(notifications);
      });
  }

  private addMissingProperties(notification: AvlNotification, count: number): AvlNotification {
    return { ...notification, read: false, id: count };
  }

  private createNotificationList(
    acc: AvlNotification[],
    value: AvlNotification
  ): AvlNotification[] {
    acc.unshift(value);
    return acc;
  }

  private setNotificationListAndCount(notifications: AvlNotification[]): void {
    this.notifications = [...notifications];
    this.setNotificationsCount(notifications);
  }

  private setNotificationsCount(notificationList: AvlNotification[]): void {
    for (let key of Object.keys(this.notificationsCount)) {
      {
        let type = this.getTypeByValue(key);
        this.notificationsCount[key] = this.getNotificationsCountByType(notificationList, type);
      }
    }
  }

  private getNotificationsCountByType(
    notificationList: AvlNotification[],
    type: number | boolean
  ): number {
    switch (type) {
      case undefined:
      case null:
        return notificationList.length;
      case true:
      case false:
        return this.getLengthByProperty(notificationList, 'read', type);
      default:
        return this.getLengthByProperty(notificationList, 'type', type);
    }
  }
  private getTypeByValue(value: string): number | boolean {
    for (let [typeKey, typeValue] of NOTIFICATION_TYPE_MAPPINGS) {
      if (typeValue === value) {
        return typeKey;
      }
    }
    return null;
  }

  private getLengthByProperty(
    notificationList: AvlNotification[],
    property: string,
    value: boolean | number
  ): number {
    return notificationList.filter(
      (notification: AvlNotification) => notification[property] === value
    ).length;
  }
}
