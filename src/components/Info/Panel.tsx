type PanelProps = {
  children: React.ReactNode;
};

const Panel = ({ children }: PanelProps) => {
  return (
    <div className="py-2 my-2 border-t-3 border-IRON flex flex-row gap-6 font-arial ">
      {children}
    </div>
  );
};

export default Panel;
