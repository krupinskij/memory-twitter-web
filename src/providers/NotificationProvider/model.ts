import React from 'react';
import { delay, Subject } from 'rxjs';

export type NotificationUtils = {
  send: (message: React.ReactNode) => void;
};

export type NotificationModel = {
  message: React.ReactNode;
  id: string;
};

export const notification$ = new Subject<NotificationModel>();

export const removedNotification$ = notification$.pipe(delay(4000));
