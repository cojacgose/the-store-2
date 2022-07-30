import UserContext from "../../contexts/UserContext";
import {useContext} from "react";
import { useState } from "react";
import LoginModal from "./LoginModal";
import ReactModal from "react-modal";

export default function LoginButton(props){

    const{setIsLoggedIn} = useContext(UserContext);
    const{isLoggedIn} = useContext(UserContext);

    const[loginModalOpen,setLoginModalOpen]=useState(false);

    if(isLoggedIn === false && loginModalOpen === false){
        return(
            <div>
                <button onClick={()=>setLoginModalOpen(true)}>LOGIN</button>
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
            <div>YOU ARE LOGGED IN</div>
        )
    }
}