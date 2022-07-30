import LoginButton from "./LoginButton"
import NavBar from "./NavBar"
import styled from "styled-components"

const HeaderBar = styled.div`
    height: 10px;
    background-color: #ff0;
    border-top:10px solid cyan;
`

export default function Header(){
    return(
        <>
            <HeaderBar></HeaderBar>
            <LoginButton></LoginButton>
            <h1>THE STORE</h1>
            <NavBar></NavBar>
            <HeaderBar></HeaderBar>
        </>
    )
}