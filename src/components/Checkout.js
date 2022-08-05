import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import CheckoutList from "./checkout/CheckoutList";
import styled from "styled-components";

const CheckoutDiv = styled.div`
`

const CoolForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
`

export default function Checkout(props){

    const {user} = useContext(UserContext);
    const {isLoggedIn} = useContext(UserContext);
    const[useLoginInfo,setUseLoginInfo]=useState(false);

    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[email,setEmail]=useState();
    const[address, setAddress]=useState();
    const[usState,setUsState]=useState();
    const[city,setCity]=useState();
    const[cardNumber,setCardNumber]=useState();

    const[cartTotal,setCartTotal] = useState(0);

    const navTo = useNavigate();
    
    useEffect(()=>{
        let total = 0;
        for(let i=0;i<user.cart.length;i++){
            total = total + (user.cart[i].item.price * user.cart[i].count)
        }
        setCartTotal(total)
    },[cartTotal,user.cart])

    useEffect(()=>{
        if(useLoginInfo&&isLoggedIn){
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setAddress(user.address);
            setUsState(user.state);
            setCity(user.city);
            setCardNumber(user.creditcard);
        }
        else{
            setFirstName(null);
            setLastName(null);
            setEmail(null);
            setAddress(null);
            setUsState(null);
            setCity(null);
            setCardNumber(null); 
        }
    },[useLoginInfo,isLoggedIn])

    function handleSubmit(e){
        e.preventDefault();
        let order = {
            cart: user.cart,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            usState: usState,
            city: city,
            cardNumber: cardNumber
        };
        user.previousOrders.push(order);
        alert("YOUR ORDER HAD BEEN SUBMITTED");
        console.log("PREVIOUS ORDERS:", user.previousOrders)
        user.cart = [];
        navTo('/')
    };

    return (
        <CheckoutDiv>

            <div>
                <div>USED SAVED INFO?</div>
                <button onClick={()=>setUseLoginInfo(true)}>YES</button>
                <button onClick={()=>setUseLoginInfo(false)}>NO</button>
            </div>
            <CoolForm onSubmit={handleSubmit}>
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
                        defaultValue={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        defaultValue={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </label>
                <label>
                    Street Address:
                    <input
                        name="address"
                        type="text"
                        defaultValue={address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                    />
                </label>
                <label>
                    State:
                    <input
                        name="usState"
                        type="text"
                        defaultValue={usState}
                        onChange={(e)=>{setUsState(e.target.value)}}
                    />
                </label>
                <label>
                    City:
                    <input
                        name="city"
                        type="text"
                        defaultValue={city}
                        onChange={(e)=>{setCity(e.target.value)}}
                    />
                </label>
                <label>
                    Credit Card Number:
                    <input
                        name="cardNumber"
                        type="number"
                        defaultValue={cardNumber}
                        onChange={(e)=>{setCardNumber(e.target.value)}}
                    />
                </label>
                <input
                    type="submit"
                    value="Confirm Order"
                />
            </CoolForm>
            <CheckoutList list={user.cart}></CheckoutList>
            <div>CART TOTAL IS: {cartTotal}</div>
        </CheckoutDiv>
    )
}