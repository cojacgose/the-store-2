import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useState } from "react";



export default function LoginModal(props){

    const{setIsLoggedIn} = useContext(UserContext);
    const{user} = useContext(UserContext);
    const{Test} = useContext(UserContext);

    //Here we are going to get the login information and compare it to the user's creditials (meaning their email and password) - 
    //if it matches, then we will close the module and set isUserLoggedIn to true. If it doesn't match, we'll return a login failed message.
    //Time permitting, we can have multiple different user login information - it will check if submitted email matches
    //Any of the names in a pregenerated UserDataBase

    const [userEmail, setUserEmail] = useState("");
    const [userPw, setUserPw] = useState("");
    const [loginFail, setLoginFail] = useState("hidden");

    function credentialCheck(){ //Compares the form email address to the saved user email addres

        if(user.email === userEmail && user.password === userPw){
            setIsLoggedIn(true);
            props.close();
        }else{
            setLoginFail("visible");
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        credentialCheck();
    }

    return( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor = "userEmail">
                    EMAIL ADDRESS
                    <input
                        name="userEmail"
                        type="email"
                        onChange={(e)=>setUserEmail(e.target.value)}
                    />
                </label>
                <label>
                    PASSWORD
                    <input
                        name="userPassword"
                        type="password"
                        onChange={(e)=>setUserPw(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Login"
                />
            </form>
            <button onClick={props.close}>CLOSE MODULE</button>
            <div style={{visibility: loginFail}}>LOGIN FAILED</div>
            <div>email to use: waldofaldo@gmail // pw: TGIF </div>
        </div>
    )
}