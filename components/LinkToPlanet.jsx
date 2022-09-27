import styled from "styled-components";
import Link from "next/link";
import ColorPicker from "../utilityFunction";
import { ToggleHamburgerMenuContext } from "./Layout";
import { useContext } from "react";


const A = styled.div`
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.75) ;

    text-decoration: none;
    height: fit-content;
    padding-top: 33px;
    cursor: pointer;

    @media (min-width : 768px) and (max-width : 1439px) {
        padding-top: 0;
        padding-bottom: 27px;
    }


    @media (min-width : 375px) and (max-width : 767px) {
            padding-top: 0;
            font-family: "League Spartan";
            border: none;
            font-weight: 700;
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            letter-spacing: 1.36364px;
        }

    &:hover {
        color: rgba(255, 255, 255, 1)  ;
        padding-top: 29px;
        border-top : 4px solid  ${props => props.ColorPicker(props.title)};
    
    @media (min-width : 768px) and (max-width : 1439px) {
            padding-top: 0;
            border: none;
        }

        @media (min-width : 375px) and (max-width : 767px) {
            padding-top: 0;
            border: none;
        }
    }

    &:active,
    &:focus {
        @media (min-width : 768px) and (max-width : 1439px) {
            padding-bottom: 23px;
        ${props => props.padding ? `border-bottom : 4px solid  ${props => props.ColorPicker(props.title)}` : null }     ;
        }
    }

`;

export default function LinkToPlanet({title, hreference}) {
   
    const {isClicked, setIsClicked} = useContext(ToggleHamburgerMenuContext)

  return (
    <>      
        <Link href={hreference} passHref>
            <A  onClick={() => setIsClicked(!isClicked)}
                title={title} ColorPicker={ColorPicker}>  {title}   </A>
        </Link>
    </>)
}
