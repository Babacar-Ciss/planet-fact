import styled from "styled-components";
import ViewButton from "./ViewButton";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimension";


const ViewButtonContainerStyle = styled.div`
        grid-column: 2 / 3;
        grid-row: 2 / 3; 
        margin-top: 80px;

    
    @media (min-width : 768px) and (max-width : 1439px) {
        flex-basis: 40.6%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0px;
        

        grid-column: 2 / 3;
        grid-row: 2 / 3; 
    }

    @media (min-width : 375px) and (max-width : 767px) {
        grid-column: 1 / 2;
        grid-row: 1 / 2; 
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom : 1px solid rgba(255,255,255,0.2);
        padding-inline: 24px;

    }


`

const viewButtonArray = [{title : "overview", number : "01" }, 
                         {title : "internal structure", number : "02" }, 
                         {title : "surface geology", number : "03" }];

const viewButtonArrayMobile = [{title : "overview", number : "01" }, 
                               {title : "structure", number : "02" }, 
                               {title : "surface", number : "03" }];
              

export default function ViewButtonContainer() {

  const [buttonSelected, setButtonSelected] = useState("01");
  const { height, width } = useWindowDimensions();

  const toggle = (index) => {
      if(index === buttonSelected) {
        setButtonSelected(null)
      }
      setButtonSelected(index);
    }

  const viewButtonMapping = viewButtonArray.map((button, index) => {
                return(         
                  <ViewButton title = {button.title} 
                              number = {button.number} 
                              key = {button.title+button.number}
                              buttonSelected = {buttonSelected}
                              setButtonSelected = {setButtonSelected}
                              toggle = {toggle}
                              index = {index}/> 
                  )
  })

  const viewButtonMappingMobile = viewButtonArrayMobile.map((button, index) => {
    return(         
      <ViewButton title = {button.title} 
                  number = {button.number} 
                  key = {button.title+button.number}
                  buttonSelected = {buttonSelected}
                  setButtonSelected = {setButtonSelected}
                  toggle = {toggle}
                  index = {index}/> 
      )
})



  return (
    <ViewButtonContainerStyle>
            {
              width >= "375" && width <= "767" ? viewButtonMappingMobile : viewButtonMapping
            }
    </ViewButtonContainerStyle>
  )
}
