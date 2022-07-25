import { nanoid } from 'nanoid/non-secure';
import { delay, Subject } from 'rxjs';

export type NotificationModel = {
  message: string;
  id: string;
};

export const notification$ = new Subject<NotificationModel>();

export const removedNotification$ = notification$.pipe(delay(4000));

// setInterval(() => {
//   const id = nanoid();
//   notification$.next({ id, message: 'Losowa wiadomość: ' + id });
// }, 10000);
