type NotificationProps = {
  message: string;
};

const Notification = ({ message }: NotificationProps) => {
  return <div className="bg-primary px-6 py-2 rounded text-textContained">{message}</div>;
};

export default Notification;
