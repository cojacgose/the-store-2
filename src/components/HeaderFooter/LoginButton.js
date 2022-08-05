import UserContext from "../../contexts/UserContext";
import {useContext} from "react";
import { useState } from "react";
import LoginModal from "./LoginModal";
import ReactModal from "react-modal";
import { CoolButton } from "../StyledComponents";

export default function LoginButton(props){

    
    const{isLoggedIn} = useContext(UserContext);
    const{user} = useContext(UserContext);

    const[loginModalOpen,setLoginModalOpen]=useState(false);


    if(isLoggedIn === false && loginModalOpen === false){
        return(
            <div>
                <CoolButton onClick={()=>setLoginModalOpen(true)}>LOGIN</CoolButton>
            </div>
        )
    }else if(loginModalOpen === true){
        return(
            <div>
                <ReactModal isOpen={loginModalOpen}>
                    <div>
                        <LoginModal close={()=>setLoginModalOpen(false)}></LoginModal>
                    </div>
                </ReactModal>
            </div>
        )
    }else{
        return(
            <div>
            <div>HELLO, {user.firstName}, YOU ARE LOGGED IN</div>
            </div>
        )
    }
}