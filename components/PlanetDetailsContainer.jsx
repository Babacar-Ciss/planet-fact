import styled from "styled-components";
import PlanetsDetailsComponents from "./PlanetsDetailsComponents";
import { GlobalContext } from "../pages/planets/[planetName]";
import { useContext } from "react";


const PlanetDetailsContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  margin-top: 87px;


@media (min-width : 768px) and (max-width : 1439px) {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  margin-top: 20px;
}

@media (min-width : 375px) and (max-width : 767px) {
  margin-top: 20px;
  flex-direction: column;
  grid-column: 1 / 1;
  grid-row: 4 / 5;
  padding-inline: 24px;
}`


export default function PlanetDetailsContainer() {
  
  const {data} = useContext(GlobalContext);
  

  return (
    <PlanetDetailsContainerStyle>
        <PlanetsDetailsComponents title="rotation time" details={data.rotation} />
        <PlanetsDetailsComponents title="revolution time" details={data.revolution} />
        <PlanetsDetailsComponents title="radius" details={data.radius} />
        <PlanetsDetailsComponents title="average temp." details={data.temperature} />
    </PlanetDetailsContainerStyle>
  )
}