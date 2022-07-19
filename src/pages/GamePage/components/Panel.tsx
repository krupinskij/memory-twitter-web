import useWide from 'hooks/useWide';

type PanelProps = {
  title: string;
  action: React.ReactNode;
  children: React.ReactNode;
};

const Panel = ({ title, action, children }: PanelProps) => {
  const isWide = useWide();
  return (
    <div
      className={`fixed top-12 right-0 ${
        isWide ? 'w-[10vw]' : 'w-[25vw]'
      } h-[calc(100vh-3rem)] flex flex-col items-center pt-8 px-4`}
    >
      <div className="bg-shadow rounded-lg py-4 mb-4 w-full">
        {!isWide && <div className="font-extrabold text-xl px-4">{title}</div>}
        {children}
      </div>
      {action}
    </div>
  );
};

export default Panel;
