import { cn } from "@/lib/cn";
import "./inputs.css";
import { forwardRef } from "react";

const OwleryTextArea = forwardRef<
  HTMLTextAreaElement,
  { className?: string; placeholder?: string }
>(
  (
    {
      className,
      placeholder,
      ...props
    }: {
      className?: string;
      placeholder?: string;
    },
    ref
  ) => {
    return (
      <textarea
        className={cn("owlery-input", className)}
        placeholder={placeholder}
        rows={4}
        ref={ref}
        {...props}
      ></textarea>
    );
  }
);
OwleryTextArea.displayName = "OwleryTextArea";

export default OwleryTextArea;
