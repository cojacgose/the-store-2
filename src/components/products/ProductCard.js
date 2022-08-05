import styled from "styled-components"
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const BorderDiv = styled.div`
    border: 5px solid lightcoral;
    display:flex;
    height:40vh;
    width:40vh;
    margin:10px;
    flex-direction: column;
    align-items:center;
    padding:10px;
    background:lightcyan;
    text-align: center;

`
const StyledImg = styled.img`
    display:flex;
    height: 50%;
    width: 50%;
    border:10px solid white;
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
            <StyledImg src={props.image} alt={props.title}/>
            <button key={props.details.id} onClick={()=>productClick(props.details.id)}>PRODUCT DETAILS</button>
            <button onClick={()=>AddToCart(props.details,1)}>QUICK ADD</button>
        </BorderDiv>
    )

}