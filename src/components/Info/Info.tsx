type InfoProps = {
  label: string;
  children: string | number;
};

const Info = ({ label, children }: InfoProps) => {
  return (
    <div className="py-3 px-4">
      <div className="text-xs text-carbon-grey">{label}</div>
      <div className="text-base leading-5 font-bold">{children}</div>
    </div>
  );
};

export default Info;
