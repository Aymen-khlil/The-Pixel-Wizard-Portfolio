import { ReactNode } from "react";
import "./spells.css";

const SpellHolderLeft = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="spell-holder-left w-full h-[500px] flex flex-col">
      {title && (
        <h2 className="text-xl font-bold text-amber-100 text-center mb-4 drop-shadow-lg">
          {title}
        </h2>
      )}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default SpellHolderLeft;
