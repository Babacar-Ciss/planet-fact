import styled from "styled-components";
import ColorPicker  from '../utilityFunction'
import { GlobalContext } from "../pages/planets/[planetName]";
import { useContext } from "react";

const ViewButtonStyle = styled.div`
    background-color: ${props => props.buttonSelected === props.index ? props.ColorPicker(props.planetName) : null } ;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-family: "League Spartan";
    padding: 12px 0 11px 28px;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57143px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color 0.2s;

@media (min-width : 768px) and (max-width : 1439px) {
    padding: 8px 0 7px 20px;
}

@media (min-width : 375px) and (max-width : 767px) {
    border: none;
    padding: 18px 0 18px 0;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: 1.92857px;
    background-color: transparent;
    border-bottom: 4px solid ${props => props.buttonSelected === props.index ? props.ColorPicker(props.planetName) : "transparent" } ;
;
}

&:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width : 375px) and (max-width : 767px) {
    margin-bottom: 0;
}
}

&:hover {
    background-color : ${props => props.buttonSelected === props.index ? null : "rgba(216, 216, 216, 0.2)"} ;
}
`

const SPAN = styled.span`
    opacity: 0.5;
    margin-right: 24px;

    @media (min-width : 375px) and (max-width : 767px) {
       display: none;
    }
`


const ViewButton = ({title, number, buttonSelected, toggle, index, }) => {
   
    const {data, setPlanetSelected, setTypeView, typeView} = useContext(GlobalContext);

    return (    
    <ViewButtonStyle buttonSelected = {buttonSelected} 
                     planetName = {data.name.toUpperCase()}
                     ColorPicker = {ColorPicker}
                     index = {index}
                     onClick={() => {
                        number === "01" ? setPlanetSelected("planet") & setTypeView("overview")     : 
                        number === "02" ? setPlanetSelected("internal") & setTypeView("structure")  : 
                        number === "03" ? setPlanetSelected("geology") & setTypeView("geology")     : null;
                    toggle(index)
    }}>
       <SPAN> {number} </SPAN> {title}
    </ViewButtonStyle>
  )
}

export default ViewButton;