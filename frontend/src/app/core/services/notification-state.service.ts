// !!! DISCLAIMER
// !!! This service is used to mock notification data.
// !!! Normally, notification state should be kept on backend, but Vizbox is just mocking it.

import { Injectable, OnDestroy } from '@angular/core';
import { AvlNotification, AvlNotificationConnectionOptions } from '@avl-controls/interfaces';
import { NotificationService, TranslationManagementService } from '@avl-services/ng-services';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { notificationEndpoint } from 'endpoint.config';
@Injectable({
  providedIn: 'root',
})
export class NotificationStateService implements OnDestroy {
  private endpoint = notificationEndpoint;
  private connectionOptions: AvlNotificationConnectionOptions = {
    connectionID: 'Starter Kit',
    metadata: {
      clientName: 'Starter Kit',
      language: this.tmService.language,
    },
  };

  private notificationSubject: Subject<AvlNotification> = new Subject();
  private destroyed$: Subject<void> = new Subject();
  private numberOfNotifications: number = 0;

  public notifications: AvlNotification[] = [];
  public notification$: Observable<AvlNotification> = this.notificationSubject;

  constructor(
    private notificationService: NotificationService,
    private tmService: TranslationManagementService
  ) {
    this.notificationService.startConnection(this.endpoint, this.connectionOptions);
    this.notificationService.notification$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((notification: AvlNotification) => this.saveNotification(notification));
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

  public selectedStateChanged(read: boolean, selectedNotifications: AvlNotification[]): void {
    this.notifications
      .filter((notification) => this.isNotificationInArray(notification, selectedNotifications))
      .forEach((notification) => (notification.read = read));
    this.notifications = [...this.notifications];
  }

  private isNotificationInArray(notification: AvlNotification, array: AvlNotification[]): boolean {
    return array.some((element) => notification.id === element.id);
  }

  private saveNotification(notification: AvlNotification): void {
    notification = { ...notification, read: false, id: ++this.numberOfNotifications };
    this.notifications = [notification, ...this.notifications];
    this.notificationSubject.next(notification);
  }

  private changeNotificationsReadStateTo(read: boolean): void {
    this.notifications.map((notification) => (notification.read = read));
    this.notifications = [...this.notifications];
  }
}
