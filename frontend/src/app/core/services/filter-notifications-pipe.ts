import { Pipe, PipeTransform } from '@angular/core';
import { AvlNotification, AvlNotificationType } from '@avl-interfaces/interfaces';

export const NOTIFICATION_TYPE_MAPPINGS = new Map<number | boolean, string>([
  [AvlNotificationType.Error, 'error'],
  [AvlNotificationType.Warning, 'warning'],
  [AvlNotificationType.Info, 'info'],
  [AvlNotificationType.OK, 'ok'],
  [false, 'unread'],
  [true, 'read'],
]);

@Pipe({ name: 'filterNotifications' })
export class FilterNotificationsPipe implements PipeTransform {
  transform(notifications: AvlNotification[], filters: { [key: string]: any }): AvlNotification[] {
    if (!filters) {
      return notifications;
    }
    return this.getFilteredNotifications(notifications, filters);
  }

  private getFilteredNotifications(
    notifications: AvlNotification[],
    filters: { [key: string]: any }
  ): AvlNotification[] {
    return notifications.filter((notification) => {
      return this.doesNotificationPassEveryFilter(notification, filters);
    });
  }

  private doesNotificationPassEveryFilter(notification: AvlNotification, filters) {
    const faild = Object.keys(filters)
      .map((key) => {
        return this.doesNotificationPassFilter(notification, filters, key);
      })
      .filter((value) => !value);
    return faild.length < 1;
  }
  private doesNotificationPassFilter(notification: AvlNotification, filters, key: string): boolean {
    const filter = filters[key];
    switch (key) {
      case 'search':
        return this.containsQuery(notification, filter);
      case 'date':
        return this.isBetweenDates(notification, filter);
      default:
        return this.matchesPropertyValue(notification, filter, key);
    }
  }

  private matchesPropertyValue(notification: AvlNotification, filter, key): boolean {
    const property = key === 'state' ? 'read' : key
    return filter[NOTIFICATION_TYPE_MAPPINGS.get(notification[property])];
  }
  private containsQuery(notification: AvlNotification, query: string): boolean {
    return notification.messageText.indexOf(query) > -1 || notification.module.indexOf(query) > -1;
  }

  private isBetweenDates(notification: AvlNotification, date): boolean {
    const [dateFrom, dateTo] = this.prepareDates(date);
    return (
      !notification.timestamp ||
      this.compareDates(new Date(notification.timestamp), dateFrom, dateTo)
    );
  }

  private prepareDates(date: { [key: string]: string }): [Date, Date] {
    const dateFrom = new Date(date.dateFrom);
    const dateTo = new Date(date.dateTo);
    dateFrom.setHours(0, 0, 0, 0);
    dateTo.setHours(23, 59, 59, 999);
    return [dateFrom, dateTo];
  }

  private compareDates(timestamp: Date, from: Date, to: Date): boolean {
    const ts = timestamp?.getTime();
    const fromTs = from?.getTime() || 0;
    const toTs = to?.getTime() || ts;

    return ts >= fromTs && ts <= toTs;
  }
}
