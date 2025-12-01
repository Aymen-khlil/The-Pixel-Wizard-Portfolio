import { cn } from "@/lib/cn";
import "./inputs.css";

const OwleryTextArea = ({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <textarea
      className={cn("owlery-input", className)}
      placeholder={placeholder}
      rows={4}
    ></textarea>
  );
};

export default OwleryTextArea;
