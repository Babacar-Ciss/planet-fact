import styled from "styled-components";

import PlanetDetailsContainer from "./PlanetDetailsContainer";
import SideInformations from "./SideInformation";
import ViewButtonContainer from "./ViewButtonContainer";
import PlanetHero from "./PlanetHero";
import { useContext } from "react";
import { ToggleHamburgerMenuContext } from "./Layout";


const MainStyle = styled.div`
    padding-inline: 165px;
    margin-top: 154px;
    margin-bottom: 56px;

    @media (min-width : 768px) and (max-width : 1439px) {
       padding-inline : 39px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        padding-inline : 0px;
        margin-top: 0px;
        background-color: #070724;
        position: relative;
    }

    
    ${props => props.isClicked ? `
    &::before {
        content : "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #070724;
        z-index: 100;
    }
    ` : null}
    
    
   

`

const Container = styled.div`
    /* height: 700px; */
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

    const { isClicked } = useContext(ToggleHamburgerMenuContext) 


  return (
    <MainStyle isClicked = {isClicked}>
        <Container> 
            <PlanetHero />
            <SideInformations  />
            <ViewButtonContainer  />
            <PlanetDetailsContainer  />
        </Container>
    </MainStyle>
  )
}
