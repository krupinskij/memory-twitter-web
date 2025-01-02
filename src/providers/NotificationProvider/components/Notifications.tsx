import { useEffect, useState } from 'react';

import { removedNotification$, NotificationModel, notification$ } from '../model';
import Notification from './Notification';

const Notifications = () => {
  const [notificationList, setNotificationList] = useState<NotificationModel[]>([]);

  useEffect(() => {
    const notificationSubscription = notification$.subscribe((notification) => {
      setNotificationList((notificationList) => [...notificationList, notification]);
    });

    const removedNotificationSubsciption = removedNotification$.subscribe((removedNotification) => {
      setNotificationList((notificationList) =>
        notificationList.filter((notification) => notification.id !== removedNotification.id)
      );
    });

    return () => {
      notificationSubscription.unsubscribe();
      removedNotificationSubsciption.unsubscribe();
    };
  }, []);

  return (
    <div className="fixed bottom-4 flex flex-col gap-2 justify-center items-center w-screen">
      {notificationList.map(({ id, message }) => (
        <Notification key={id} message={message} />
      ))}
    </div>
  );
};

export default Notifications;
