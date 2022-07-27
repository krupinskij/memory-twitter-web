import { delay, Subject } from 'rxjs';

export type NotificationUtils = {
  send: (message: string) => void;
};

export type NotificationModel = {
  message: string;
  id: string;
};

export const notification$ = new Subject<NotificationModel>();

export const removedNotification$ = notification$.pipe(delay(4000));
