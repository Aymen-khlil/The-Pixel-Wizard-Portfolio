import OwleryInput from "@/components/inputs/OwleryInput";
import "./theOwlery.css";

const SendAnOwl = () => {
  return (
    <div className="theOwlery-content">
      <h1>Send An Owl</h1>
      <div>
        <OwleryInput />
      </div>
    </div>
  );
};

export default SendAnOwl;
