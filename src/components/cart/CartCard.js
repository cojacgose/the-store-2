import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import styled from "styled-components";
import { useState } from "react";

const CartDiv=styled.div`
    background-color: lightcyan;
    text-align: center;
    display:flex;
    flex-direction: row;
    align-items: center;
    font-size: large;
    border:5px solid lightcoral;
    margin:10px;
    padding:10px;
`

export default function CartCard(props){
    const{RemoveFromCart}=useContext(UserContext);
        return(
            <CartDiv>
                <div>{props.title}-</div>
                <div>COUNT: {props.count}-</div>
                <div>TOTAL: {props.count * props.price}</div>
                <button onClick={()=>RemoveFromCart(props.item.item)}>REMOVE FROM CART</button>
            </CartDiv>
        )
}

//We will have to add the Count in an editable input, with +/- buttons