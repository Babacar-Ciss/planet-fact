import styled from "styled-components";


const PlanetsDetailsComponentsStyle = styled.div`
min-width: 255px;
padding-top: 20px ;
padding-left : 23px;
grid-column: auto;
border: 1px solid rgba(255,255,255,0.2);
text-transform: uppercase;

&:not(:last-child) {
    margin-right: 30px;

    @media (min-width : 768px) and (max-width : 1439px) {
            margin-right: 11px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
            margin-right: 0;
    } 
}

@media (min-width : 768px) and (max-width : 1439px) {
    min-width: 164px;
    padding-top: 16px ;
    padding-left : 15px;
}

@media (min-width : 375px) and (max-width : 767px) {
            min-width: 100%;
            padding-top: 8px ;
            padding-left : 24px;
            padding-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 24px;
            margin-bottom: 8px;
        } 
`

const P = styled.p`
font-family: 'League Spartan';
font-weight: 700;
font-size: 11px;
line-height: 25px;
letter-spacing: 1px;
margin: 0 0 4px 0;
color :rgba(255, 255, 255, 0.5);

@media (min-width : 768px) and (max-width : 1439px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.7px;
}


@media (min-width : 375px) and (max-width : 767px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.7px;
    margin : 0;
    } 
`

const H1 = styled.h1`
margin: 0 ;
font-family: 'Antonio';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 52px;
letter-spacing: -1.5px;

    @media (min-width : 768px) and (max-width : 1439px) {
        font-size: 24px;
        line-height: 31px;
        letter-spacing: -0.9px;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.75px;
        
    } 

`


const PlanetsDetailsComponents  = ({title, details }) => {

    return (
        <PlanetsDetailsComponentsStyle>
            <P> {title} </P>
            <H1> {details} </H1>
        </PlanetsDetailsComponentsStyle>
    );
}


export default PlanetsDetailsComponents;