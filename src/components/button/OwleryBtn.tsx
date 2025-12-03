import "./button.css";

const OwleryBtn = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="owlery-btn action-text" {...props}>
      {children}
    </button>
  );
};

export default OwleryBtn;
