import { ReactNode } from "react";
import "./spells.css";

const SpellHolderRight = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="spell-holder-right min-w-[370px]  max-w-[500px]  h-[500px] flex flex-col">
      {title && (
        <h2 className="text-xl font-bold text-[#7E280C] text-center mb-4 drop-shadow-lg">
          {title}
        </h2>
      )}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default SpellHolderRight;
