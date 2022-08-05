import styled from "styled-components"
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const BorderDiv = styled.div`
    border-top:5px solid #C72D7A;
`

export default function ProductCard(props){

    const[itemDetails,setItemDetails]=useState([]);
    const{user} = useContext(UserContext);
    const{setCurrentItem} = useContext(UserContext);
    const{AddToCart} = useContext(UserContext);
    
    useEffect(()=>{setItemDetails(props.details)},[props.details])

    const navTo = useNavigate();

    function productClick(pid){
        setCurrentItem(props.details);
        navTo(`/productdetails/${pid}`);
    }

    return(
        <BorderDiv>
            <h3>{props.title}</h3>
            <span>{props.price}</span>
            <img src={props.image} alt={props.title}/>
            <button key={props.details.id} onClick={()=>productClick(props.details.id)}>PRODUCT DETAILS</button>
            <button onClick={()=>AddToCart(props.details,1)}>QUICK ADD</button>
        </BorderDiv>
    )

}