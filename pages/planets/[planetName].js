import Head from 'next/head';
import Main from '../../components/Main';
import { useState, useEffect, createContext, useContext } from 'react';
import { ToggleHamburgerMenuContext } from "../../components/Layout";


export async function getStaticProps ({params}) {
    const result = require("../../data.json");

    const planetFilter = result.filter(res => res.name === params.planetName)

    return {
          
        props : {
            planet : planetFilter[0],
        }
    }
}

export async function getStaticPaths() {
    const planets = require("../../data.json");    

    return {
        paths : planets.map(planet => {
            return {
                params : {
                    planetName : planet.name,
                }
            }
        }),
        fallback : false
    }
}


export const GlobalContext = createContext();

const Planet = ({planet}) => {

    const {isClicked} = useContext(ToggleHamburgerMenuContext);

    const [data, setData] = useState(planet)
    const [planetSelected, setPlanetSelected] = useState("planet");
    const [typeView, setTypeView] = useState("overview");
    
    useEffect(() => {
        setData(planet)
    });



    return (
        <GlobalContext.Provider value={{data, setData, 
                                        planetSelected, setPlanetSelected,
                                        typeView, setTypeView}}> 
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap" rel="stylesheet" /> 
            </Head>

            {
                !isClicked ? (<Main data = {data} 
                    planetSelected = {planetSelected}
                    setPlanetSelected = {setPlanetSelected}
                    typeView = {typeView}
                    setTypeView = {setTypeView}/>)  : null


            }




            
        </>
        </GlobalContext.Provider>
    );
}

export default Planet;

