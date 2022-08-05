import LoginButton from "./LoginButton"
import NavBar from "./NavBar"
import styled from "styled-components"

const HeaderDiv =styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightcyan;
    border-top:coral solid 5px;
    border-bottom:coral solid 10px;
`

export default function Header(){
    return(
        <HeaderDiv>
            <LoginButton></LoginButton>
            <h1>THE STORE</h1>
            <NavBar></NavBar>
        </HeaderDiv>
    )
}