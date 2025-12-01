import OwleryInput from "@/components/inputs/OwleryInput";
import "./theOwlery.css";
import OwleryTextArea from "@/components/inputs/OwleryTextArea";
import OwleryBtn from "@/components/button/OwleryBtn";

const SendAnOwl = () => {
  return (
    <div className="theOwlery-content flex items-center justify-center ">
      <div className="theOwlery-scroll w-[30%] h-[80%] relative">
        <div className=" h-full w-full flex flex-col gap-5 items-start   ">
          <h1 className="text-center  w-full text-3xl">Send an Owl</h1>
          <div className=" flex-1 flex flex-col gap-5 w-full items-start justify-start ">
            <div className="w-full  flex items-center justify-center">
              <OwleryInput
                className="w-[70%]"
                placeholder="Enter your owl name."
              />
            </div>

            <div className="w-full  flex items-center justify-center">
              <OwleryInput
                className="w-[70%]"
                placeholder="Enter your owl email."
              />
            </div>
            <div className="w-full  flex items-center justify-center">
              <OwleryTextArea
                placeholder="Enter your owl message."
                className="w-[70%]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-[43%]  ">
          <OwleryBtn>SEND</OwleryBtn>
        </div>
      </div>
    </div>
  );
};

export default SendAnOwl;
