import { cn } from "@/lib/cn";
import "./inputs.css";

const OwleryInput = ({
  className,
  placeholder,
  ...props
}: {
  className?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className={cn("owlery-input w-full", className)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default OwleryInput;
