import { useState, Suspense, useEffect } from "react";
import ProjectPlanet from "./ProjectPlanet";
import TechPlanet from "./TechPlanet";
import ArtPlanet from "./ArtPlanet";
import TravelPlanet from "./TravelPlanet";
import CreditsPlanet from "./CreditsPlanet";
import LandingPage from "./LandingPage";
import AboutMePlanet from "./AboutMePlanet";
import CatModel from "./CatModel";
export default function PlanetScene({ scroll }) {
  const [sections, setSections] = useState([
    { name: "player", start: 0, end: 15, scroll: 0 },
    { name: "aboutMe", start: 15, end: 25, scroll: 0 },
    { name: "projects", start: 25, end: 35, scroll: 0 },
    { name: "tech", start: 35, end: 45, scroll: 0 },
    { name: "art", start: 45, end: 55, scroll: 0 },
    { name: "travel", start: 55, end: 65, scroll: 0 },
    { name: "credits", start: 65, end: 75, scroll: 0 },
  ]);

  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        scroll: scroll - section.start,
      }))
    );
  }, [scroll]);
  return (
    <Suspense fallback={<LandingPage />}>
      <CatModel scroll={sections.find((s) => s.name === "player")?.scroll} />
      {scroll > 15 && scroll <= 25 && (
        <AboutMePlanet
          scroll={sections.find((s) => s.name === "aboutMe")?.scroll}
        />
      )}
      {scroll > 25 && scroll <= 35 && (
        <ProjectPlanet
          scroll={sections.find((s) => s.name === "projects")?.scroll}
        />
      )}
      {scroll > 35 && scroll <= 45 && (
        <TechPlanet scroll={sections.find((s) => s.name === "tech")?.scroll} />
      )}
      {scroll > 45 && scroll <= 55 && (
        <ArtPlanet scroll={sections.find((s) => s.name === "art")?.scroll} />
      )}
      {scroll > 55 && scroll <= 65 && (
        <TravelPlanet
          scroll={sections.find((s) => s.name === "travel")?.scroll}
        />
      )}
      {scroll > 65 && scroll <= 75 && (
        <CreditsPlanet
          scroll={sections.find((s) => s.name === "credits")?.scroll}
        />
      )}
    </Suspense>
  );
}
