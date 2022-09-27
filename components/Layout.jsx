import Navbar from "./Navbar";
import styled from "styled-components";
import { createContext, useState} from "react";



export const ToggleHamburgerMenuContext = createContext();



const LayoutStyle = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    background: url(${"../assets/background-stars.svg"})  #070724 ;
`

const Layout = ({children}) => {
    const [isClicked, setIsClicked] = useState(false)


    return (
        <LayoutStyle>
            <ToggleHamburgerMenuContext.Provider value={{isClicked, setIsClicked}}>
                <Navbar />
                {children}
            </ToggleHamburgerMenuContext.Provider> 
        </LayoutStyle>
    );
}

export default Layout;
