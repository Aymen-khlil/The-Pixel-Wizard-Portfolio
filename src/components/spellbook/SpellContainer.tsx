import "./spells.css";

const SpellContainer = ({ spell }: { spell: string }) => {
  return (
    <div className="spell-container w-fit h-fit flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110">
      <p className="uppercase text-xs font-semibold text-amber-900 text-center tracking-wide spell-text">
        {spell}
      </p>
    </div>
  );
};

export default SpellContainer;
