import useSound from "@/lib/onClickSoundEffect";
import "./button.css";

const OwleryBtn = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const playSound = useSound("/audio/onClickAudio.wav");
  return (
    <button
      className="owlery-btn action-text"
      {...props}
      onClick={() => playSound()}
    >
      {children}
    </button>
  );
};

export default OwleryBtn;
