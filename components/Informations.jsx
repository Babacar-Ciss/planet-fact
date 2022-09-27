import styled from "styled-components";
import Link from "next/link";
import { GlobalContext } from "../pages/planets/[planetName]";
import { useContext } from "react";


const InformationsStyle = styled.div`
    

    @media (min-width : 768px) and (max-width : 1439px) {
        flex-basis: 80%;
    }

    

    & > * {
        margin: 0;
        padding: 0;
    }
`

    const H1 = styled.h1`
        font-family: 'Antonio';
        font-size: 80px;
        line-height: 104px;
        text-transform: uppercase;
        margin-bottom: 23px;

        @media (min-width : 768px) and (max-width : 1439px) {
            font-size: 48px ;
            margin-bottom: 24px;
            line-height: 62px;
            padding: 0;
        }

        @media (min-width : 375px) and (max-width : 767px) {
            font-size: 40px ;
            margin-bottom: 16px;
            line-height: 52px;
            padding: 0;
            text-align: center;
        }   
    `

    const Description = styled.p`
        font-family: 'League Spartan';
        margin-bottom: 24px;
        opacity: 0.8;

        @media (min-width : 768px) and (max-width : 1439px) {
            font-size: 11px ;
            margin-bottom: 32px;
            line-height: 22px;
        }

        @media (min-width : 375px) and (max-width : 767px) {
            font-size: 11px ;
            line-height: 25px;
            text-align: center;
            margin-bottom: 32px;
            padding-inline: 24px;
        } 
    `

    const Source = styled.p`
        font-family: 'League Spartan';
        opacity : 0.5;
        margin-bottom: 39px;

        @media (min-width : 768px) and (max-width : 1439px) {
            font-size: 12px;
            line-height: 25px;
        }

        @media (min-width : 375px) and (max-width : 767px) {
            font-size: 12px;
            line-height: 25px;
            text-align: center;
        } 
    `

    const SPAN = styled.span`
        border-bottom: 1px solid rgba(255,255,255,0.5);
        font-weight: 700;
    `

    const ImgSVG = styled.img`
        margin-left: 5px;
        margin-bottom: -3px;
    ` 

const Informations = () => {

    const {data, typeView} = useContext(GlobalContext);

    return (
        <InformationsStyle>
            <H1>{data.name}</H1>
            <Description>{data[typeView].content}</Description>
            <Source> 
                    Source : <SPAN> <Link href={data[typeView].source}> Wikipedia  </Link>  </SPAN>       
                    <ImgSVG src="/assets/icon-source.svg" alt="chevron link" />     
            </Source>
        </InformationsStyle>
    );
}

export default Informations;
