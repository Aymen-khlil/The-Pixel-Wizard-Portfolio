import "./button.css";

const OwleryBtn = ({ children }: { children: React.ReactNode }) => {
  return <button className="owlery-btn">{children}</button>;
};

export default OwleryBtn;
