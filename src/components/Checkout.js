import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useEffect } from "react";
import CheckoutList from "./checkout/CheckoutList";

export default function Checkout(props){

    const {user} = useContext(UserContext);
    const isLoggedIn = useContext(UserContext);
    const[useLoginInfo,setUseLoginInfo]=useState(false);

    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[email,setEmail]=useState();
    const[address, setAddress]=useState();
    const[usState,setUsState]=useState();
    const[city,setCity]=useState();
    const[cardNumber,setCardNumber]=useState();

    function handleSubmit(){

    };

    return (
        <div>
            <form>
                <label>
                    First Name:
                    <input
                        name="firsName"
                        type="text"
                        defaultValue={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </label>
                <label>
                    Street Address:
                    <input
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                    />
                </label>
                <label>
                    State:
                    <input
                        name="usState"
                        type="text"
                        value={usState}
                        onChange={(e)=>{setUsState(e.target.value)}}
                    />
                </label>
                <label>
                    City:
                    <input
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e)=>{setCity(e.target.value)}}
                    />
                </label>
                <label>
                    Credit Card Number:
                    <input
                        name="cardNumber"
                        type="number"
                        value={cardNumber}
                        onChange={(e)=>{setCardNumber(e.target.value)}}
                    />
                </label>
            </form>
            <button onClick={()=>handleSubmit}>SUBMIT ORDER</button> {/*does this need to be a input with type submit?? Function will pass information into a modal, maybe save to previous orders for user*/}
            <CheckoutList list={user.cart}></CheckoutList>
        </div>
    )
}