import styled from "styled-components"
import LinkToPlanet from "./LinkToPlanet"
import MenuMobile from "./MenuMobile";
import { useContext } from "react";
import { ToggleHamburgerMenuContext } from "./Layout";


const NavbarStyle = styled.div`
    width: 100%;
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width : 768px) and (max-width : 1439px) {
        padding: 0;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        padding-bottom: 16px;
    }



`
const Container = styled.div`
    width: 100%;
    padding: 0 40px 0 29px;
    display: flex;
    justify-content: space-between;

    @media (min-width : 768px) and (max-width : 1439px) {
        flex-wrap: wrap;
        padding: 0 53px 0 53px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        padding: 0 24px 0 24px;
        align-items: center;
    }
    
`
const H1 = styled.div`
    font-family: 'Antonio';
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -1.05px;
    padding-top: 22px;

    @media (min-width : 768px) and (max-width : 1439px) {
        flex-basis: 100%;
        text-align: center;
        padding-top: 32px;
        margin-bottom: 39px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        padding-top: 16px;
    }
`
const NavLink = styled.nav`
    font-family: 'League Spartan';
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;


    @media (min-width : 768px) and (max-width : 1439px) {
       flex-basis: 100%; 
       display: flex;
       justify-content: space-between;
    }

    @media (min-width : 375px) and (max-width : 767px) {
       display: none;
    }


`;

const UL = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width : 768px) and (max-width : 1439px) {
       flex-basis: 100%; 
       display: flex;
       justify-content: space-between ;
    }
`;

const LI = styled.li`
    &:not(:last-child) {
        margin-right: 33px;
    }
`;

const HamburgerMenuIcon = styled.img`
    display: none;
    
    @media (min-width : 375px) and (max-width : 767px) {
        display: block;
        width: 24px;
        height: 17px;
        margin-top: 18px;
        cursor: pointer;
    }
`


export default function Navbar() {

    const {isClicked, setIsClicked} = useContext(ToggleHamburgerMenuContext);

  return (
    <NavbarStyle>
        <Container>
            <H1> THE PLANETS </H1>
            <NavLink>
                <UL>
                    <LI> <LinkToPlanet hreference="/planets/Mercury" title="MERCURY" />  </LI>
                    <LI> <LinkToPlanet hreference="/planets/Venus" title="VENUS" />    </LI>
                    <LI> <LinkToPlanet hreference="/planets/Earth" title="EARTH" />    </LI>
                    <LI> <LinkToPlanet hreference="/planets/Mars" title="MARS" />     </LI>
                    <LI> <LinkToPlanet hreference="/planets/Jupiter" title="JUPITER" />  </LI>
                    <LI> <LinkToPlanet hreference="/planets/Saturn" title="SATURN" />   </LI>
                    <LI> <LinkToPlanet hreference="/planets/Uranus" title="URANUS" />   </LI>
                    <LI> <LinkToPlanet hreference="/planets/Neptune" title="NEPTUNE" /> </LI>
                </UL>
            </NavLink>
            <HamburgerMenuIcon onClick={() => setIsClicked(!isClicked)} src='/assets/icon-hamburger.svg' alt="hamburger menu logo" />
        </Container>
            { isClicked ? <MenuMobile isClicked = {isClicked} />  : null}    
    </NavbarStyle>
  )
}
