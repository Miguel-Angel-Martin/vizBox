import {  Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from 'app/shared/components/base/base.component';
import { NotificationStateService } from 'app/core/services/notification-state.service';
import { AvlNotification } from '@avl-interfaces/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'viz-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent extends BaseComponent implements OnInit {
  public notificationCount = 0;
  public dialogData: AvlNotification[] = [];
  public isNotificationMenuOpen = false;
  public isNotificationDialogOpen = false;
  public filters: { [key: string]: any };
  public newNotifications: Subject<boolean> = new Subject();

  constructor(public readonly notificationService: NotificationStateService) {
    super();
  }

  public ngOnInit(): void {
    this.notificationService.notification$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.isNotificationMenuOpen || this.isNotificationDialogOpen || this.notificationCount++;
      this.newNotifications.next(true);
    });
  }

  public toggleNotificationsMenu(): void {
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    this.notificationCount = 0;
  }

  public openNotificationDialog(): void {
    this.isNotificationDialogOpen = true;
    this.dialogData = [...this.notificationService.notifications];
    this.newNotifications.next(false);
  }

  public onNotificationStateChanged(notification: AvlNotification): void {
    this.notificationService.updateNotification(notification);
  }

  public markSelectedAsRead(selectedValues: AvlNotification[]): void {
    this.dialogData = [
      ...this.notificationService.selectedStateChanged(this.dialogData, true, selectedValues),
    ];
  }

  public markSelectedAsUnread(selectedValues: AvlNotification[]): void {
    this.dialogData = [
      ...this.notificationService.selectedStateChanged(this.dialogData, false, selectedValues),
    ];
  }

  public onFiltersChange(event: CustomEvent | Event): void {
    this.filters = (event as CustomEvent).detail;
  }

  public refreshData(): void {
    this.dialogData = [...this.notificationService.notifications];
    this.newNotifications.next(false);
  }
}
