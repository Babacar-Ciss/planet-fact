import React from 'react';
import styled from 'styled-components';
import LinkToPlanet from './LinkToPlanet';



const MenuMobileStyle = styled.div`
    width: 100vw;
    height: auto;
    background-color: #070724;
    z-index: 200;
    position: absolute;
    top: 70px;
    display: none;

    @media (min-width : 375px) and (max-width : 767px) {
        display: block;
    }



    
`
const LI = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px ;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:last-of-type {
        border: none;
    }
`

const UL = styled.ul`
    padding-left: 24px;
    padding-right: 32px;
`

const SPAN = styled.span`
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${props => props.bgColor};
    margin-right: 25px;
`

const ChevronImage = styled.img`
    margin-right: 0;
    margin-left: auto;
    width: 4px;
    height: 8px;

`


const MenuMobile = ({isClicked}) => {
    return (
        <MenuMobileStyle>
            <UL>
                    <LI> 
                        <SPAN bgColor = "#DEF4FC"> </SPAN>
                        <LinkToPlanet isClicked = {isClicked} hreference="/planets/Mercury" title="MERCURY" />   
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#F7CC7F"></SPAN> 
                        <LinkToPlanet hreference="/planets/Venus" title="VENUS" />    
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#545BFE"></SPAN> 
                        <LinkToPlanet hreference="/planets/Earth" title="EARTH" />    
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#FF6A45"></SPAN>
                        <LinkToPlanet hreference="/planets/Mars" title="MARS" />     
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#ECAD7A"></SPAN>
                        <LinkToPlanet hreference="/planets/Jupiter" title="JUPITER" />  
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#FCCB6B"></SPAN>
                        <LinkToPlanet hreference="/planets/Saturn" title="SATURN" />   
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#65F0D5"></SPAN>
                        <LinkToPlanet hreference="/planets/Uranus" title="URANUS" />   
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
                    
                    <LI> 
                        <SPAN bgColor = "#497EFA"></SPAN>
                        <LinkToPlanet hreference="/planets/Neptune" title="NEPTUNE" /> 
                        <ChevronImage src="/assets/icon-chevron.svg" alt="" />
                    </LI>
            </UL>
        </MenuMobileStyle>
    );
}

export default MenuMobile;
