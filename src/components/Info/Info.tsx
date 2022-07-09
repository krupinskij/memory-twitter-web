type InfoProps = {
  label: string;
  children: string | number;
};

const Info = ({ label, children }: InfoProps) => {
  return (
    <div className="w-40">
      <div className="text-xxs">{label}</div>
      <div className="text-xl">{children}</div>
    </div>
  );
};

export default Info;
