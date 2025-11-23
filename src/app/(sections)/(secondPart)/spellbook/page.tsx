import Navbar from "@/components/navbar/Navbar";
import "./spellbook.css";
import SpellContainer from "@/components/spellbook/SpellContainer";
import SpellHolder from "@/components/spellbook/SpellHolder";
import SpellHolderLeft from "@/components/spellbook/SpellHolderLeft";
import SpellHolderRight from "@/components/spellbook/SpellHolderRight";

const Spellbook = () => {
  const frontendSpells = [
    "React",
    "Vite",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "Material UI",
    "Shadcn",
    "Flowbite",
    "Formik",
    "Yup",
    "Recharts",
    "ChartsJS",
    "Ant Design",
  ];

  const backendSpells = [
    "NodeTS",
    "Express",
    "NestJS",
    "MongoDB",
    "REST APIs",
    "Server-Sent Events (SSE)",
  ];

  const toolSpells = [
    "Git",
    "Jira",
    "Docker",
    "Jenkins",
    "SonarQube",
    "Zeplin",
    "Postman",
    "Figma",
    "VS Code",
    "Active Campaign",
    "Google Ads",
    "Serper",
  ];

  return (
    <div className="spellbook-content flex flex-col h-screen overflow-hidden">
      <div className="lg:px-40">
        <Navbar />
      </div>

      {/* Main content - no scroll */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24 py-12">
        <div className="w-full max-w-7xl flex gap-6 items-stretch justify-center">
          {/* Frontend Spells */}
          <div className="flex-1">
            <SpellHolderLeft title="Frontend Enchantments">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {frontendSpells.map((spell) => (
                  <SpellContainer key={spell} spell={spell} />
                ))}
              </div>
            </SpellHolderLeft>
          </div>

          {/* Backend Spells */}
          <div className="flex-1">
            <SpellHolder title="Backend Sorcery">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {backendSpells.map((spell) => (
                  <SpellContainer key={spell} spell={spell} />
                ))}
              </div>
            </SpellHolder>
          </div>

          {/* Tools Spells */}
          <div className="flex-1">
            <SpellHolderRight title="Magical Tools">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {toolSpells.map((spell) => (
                  <SpellContainer key={spell} spell={spell} />
                ))}
              </div>
            </SpellHolderRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spellbook;
