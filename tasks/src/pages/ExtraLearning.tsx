

import { ElCardDisplay } from "../components/extraLearning/ElCardDisplay";
import { HeroSection } from "../components/extraLearning/HeroSection";
import { FilterSection } from "../components/extraLearning/FilterSection";
import { useState } from "react";

export const ExtraLearning = () => {
  const [program, setProgram] = useState<string>("All Programs");
  const [contributor, setContributor] = useState<string>("All Contributors");
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <div className="bg-gray-50 h-full mb-10 pt-23">
        <HeroSection />
        <FilterSection
          program={program}
          setProgram={setProgram}
          contributor={contributor}
          setContributor={setContributor}
          search={search}
          setSearch={setSearch}
        />

        <ElCardDisplay
          program={program}
          setProgram={setProgram}
          contributor={contributor}
          setContributor={setContributor}
          search={search}
        />
      </div>
    </>
  );
};
