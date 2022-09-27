import styled from "styled-components";
import Informations from "./Informations";

const SideInformationsStyle = styled.div`
    color: #FFF;
    font-size: 14px;
    line-height: 25px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @media (min-width : 768px) and (max-width : 1439px) {
        grid-column: 1 / 1;
        grid-row: 2 / 3;
        display: flex;
        justify-content: space-between;
    }

    @media (min-width : 375px) and (max-width : 767px) {
        grid-column: 1 / 1;
        grid-row: 3 / 4;
    }

& > * {
    margin: 0;
    padding: 0;
}
`

const SideInformations  = () => {
    
    return (
        <SideInformationsStyle>
            <Informations />
        </SideInformationsStyle>
    );
}

export default SideInformations;