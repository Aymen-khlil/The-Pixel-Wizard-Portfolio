import "./button.css";

const OwleryBtn = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="owlery-btn" {...props}>
      {children}
    </button>
  );
};

export default OwleryBtn;
