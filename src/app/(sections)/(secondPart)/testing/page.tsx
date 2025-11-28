"use client";
import "./testcss.css";

const TheTest = () => {
  return (
    <div className=" bg-white h-full flex flex-col gap-3 pl-3 pt-3 pr-3">
      <div className="gryffindor-btn">button</div>
      <div className="ravenclaw-btn">button</div>
      <div className="slytherin-btn">button</div>
      <div className="huffelpuff-btn">button</div>

      <div className="gryffindor-navbar">navbar</div>
      <div className="ravenclaw-navbar">navbar</div>
      <div className="slytherin-navbar">navbar</div>
      <div className="huffelpuff-navbar">navbar</div>
    </div>
  );
};

export default TheTest;
