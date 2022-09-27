import styled from "styled-components";
import { GlobalContext } from "../pages/planets/[planetName]";
import { useContext } from "react";



const PlanetHeroStyle = styled.div`
     grid-column: 1 / 2;
     grid-row: 1 / 3;
     display: flex;
     justify-content: center; 
     align-items: center; 
     position: relative;

    @media (min-width : 768px) and (max-width : 1439px) {
        grid-column: 1 / 3;
        grid-row: 1 / 1;
    }

    @media (min-width : 375px) and (max-width : 767px) {        
        grid-column: 1 / 1;
        grid-row: 2 / 3;
    }

     
`

const MainImage = styled.img`
        @media (min-width : 768px) and (max-width : 1439px) {
            transform-origin : 50% 15.5%;
            transform: scale(0.63);
        }

        @media (min-width : 375px) and (max-width : 767px) {
            transform-origin : 50% 0;
            transform: scale(0.38) translateY(80%);
        }
`

const GeologyImage = styled.img`
        width: 163px;
        height : 199px;
        position: absolute;
        bottom : -20px;

        @media (min-width : 375px) and (max-width : 767px) {
            transform: scale(0.6) translateX(-70px) rotate(45deg) ;
        } 
`

const PlanetHero = () => {

    const {data, planetSelected} = useContext(GlobalContext);


    return (
        <PlanetHeroStyle>
            <MainImage src={data.images[planetSelected === "geology" ? "planet" : planetSelected]} alt="planet hero" />  
            { planetSelected === "geology" ? <GeologyImage src={data.images.geology} alt="planet hero" /> : null}      
        </PlanetHeroStyle>
    );
}

export default PlanetHero;
