import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from 'app/shared/components/base/base.component';
import { NotificationStateService } from 'app/core/services/notification-state.service';
import { AvlNotification } from '@avl-controls/interfaces';

@Component({
  selector: 'viz-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent extends BaseComponent implements OnInit {
  public notificationCount: number = 0;
  public isNotificationMenuOpen: boolean = false;
  public isNotificationDialogOpen: boolean = false;

  constructor(public notificationService: NotificationStateService) {
    super();
  }

  public ngOnInit(): void {
    this.notificationService.notification$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.isNotificationMenuOpen || this.isNotificationDialogOpen || this.notificationCount++;
    });
  }

  public toggleNotificationsMenu(): void {
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    this.notificationCount = 0;
  }

  public openNotificationDialog(): void {
    this.isNotificationDialogOpen = true;
  }

  public onNotificationStateChanged(notification: AvlNotification): void {
    this.notificationService.updateNotification(notification);
  }

  public markSelectedAsRead(selectedValues: AvlNotification[]): void {
    this.notificationService.selectedStateChanged(true, selectedValues);
  }

  public markSelectedAsUnread(selectedValues: AvlNotification[]): void {
    this.notificationService.selectedStateChanged(false, selectedValues);
  }
}
