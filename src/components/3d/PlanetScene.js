import { Suspense } from "react";
import ProjectPlanet from "./ProjectPlanet";
import TechPlanet from "./TechPlanet";
import ArtPlanet from "./ArtPlanet";
import TravelPlanet from "./TravelPlanet";
import CreditsPlanet from "./CreditsPlanet";
import LandingPage from "./LandingPage";
import AboutMePlanet from "./AboutMePlanet";
export default function PlanetScene() {
  return (
    <Suspense fallback={<LandingPage />}>
      <AboutMePlanet />
      <ProjectPlanet />
      <TechPlanet />
      <ArtPlanet />
      <TravelPlanet />
      <CreditsPlanet />
    </Suspense>
  );
}
