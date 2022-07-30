import LoginButton from "./LoginButton"
import NavBar from "./NavBar"

export default function Header(){
    return(
        <>
            <LoginButton></LoginButton>
            <h1>THE STORE</h1>
            <NavBar></NavBar>
        </>
    )
}