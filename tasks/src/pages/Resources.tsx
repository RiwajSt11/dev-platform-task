import { ResourcesSemSection } from "../components/resources/ResourcesSemSection";
import { NavbarResources } from "../layouts/NavbarResources";
import { useRef, useState } from "react";
import { ResourcesFooter } from "../layouts/ResourcesFooter";

export const Resources = () => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleScrollToSearch = () => {
    const yOffset = -120;
    const element = searchRef.current;

    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  };
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <NavbarResources handleScrollToSearch={handleScrollToSearch} />
      <main className="px-37.25 mt-36.5 min-h-screen">
        <ResourcesSemSection
          searchRef={searchRef}
          inputRef={inputRef}
          level={4}
          search={search}
          setSearch={setSearch}
          searchDiv={true}
        />
        <div className="mt-28.5 pl-1">
          <ResourcesSemSection
            level={5}
            searchDiv={false}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </main>
      <footer className="mt-45">
        <ResourcesFooter />
      </footer>
    </>
  );
};
