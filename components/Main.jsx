import styled from "styled-components";

import PlanetDetailsContainer from "./PlanetDetailsContainer";
import SideInformations from "./SideInformation";
import ViewButtonContainer from "./ViewButtonContainer";
import PlanetHero from "./PlanetHero";

const MainStyle = styled.div`
    padding-inline: 165px;
    margin-top: 154px;
    margin-bottom: 56px;

    @media (min-width : 768px) and (max-width : 1439px) {
       padding-inline : 39px;
       margin-bottom: 14px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
       padding-inline : 0px;
       margin-top: 0px;
       margin-bottom: 20px;
       overflow : hidden;
    }
    
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 68.4% 31.6%;
    grid-template-rows: 260px 260px 215px;


    @media (min-width : 768px) and (max-width : 1439px) {
        grid-template-columns: repeat(2, 50%) ;
        grid-template-rows: 314px 253px 108px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        grid-template-columns: 100%;
        grid-template-rows: 50px 305px 233px 250px;
    }

`


export default function Main() {

  return (
    <MainStyle>
        <Container> 
            <PlanetHero />
            <SideInformations  />
            <ViewButtonContainer  />
            <PlanetDetailsContainer  />
        </Container>
    </MainStyle>
  )
}
