import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
    background-color: lightyellow;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export default function MainBody(){
    return(
        <MainDiv>
            <Outlet/>
        </MainDiv>
    )
}