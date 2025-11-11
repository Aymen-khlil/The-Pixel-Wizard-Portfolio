import Image from "next/image";
import MagicButton from "../components/button/MagicButton";
import TextType from "@/components/TextType";

export default function HomePage() {
  return (
    <section className="h-screen  flex flex-col items-center justify-center text-center overflow-auto ">
      <div className=" flex items-center justify-center h-full w-full">
        <div
          className="flex flex-col h-screen items-center justify-between"
          style={{ padding: "70px 0px" }}
        >
          <div className="">
            <div>
              <TextType
                text={"WELCOME"}
                typingSpeed={75}
                pauseDuration={1000}
                showCursor={false}
                className="title text-3xl sm:text-4xl md:text-6xl animate-typing"
              />
            </div>
            <div className=" ">
              <TextType
                text={"WIZARD"}
                typingSpeed={75}
                pauseDuration={1500}
                initialDelay={1070}
                showCursor={false}
                className="title text-5xl sm:text-6xl md:text-8xl  animate-typing "
              />
            </div>
          </div>

          <div className="">
            <MagicButton />
          </div>
        </div>
      </div>
    </section>
  );
}
