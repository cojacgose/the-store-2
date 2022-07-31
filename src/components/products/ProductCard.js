import styled from "styled-components"
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


const BorderDiv = styled.div`
    border-top:5px solid #C72D7A;
`

export default function ProductCard(props){

    const[itemDetails,setItemDetails]=useState([]);
    const{user}=useContext(UserContext);
    
    useEffect(()=>{setItemDetails(props.details)},[props.details])

    function AddToCart(){
        //here we need to add it to cart!
        if(user.cart.some(element=>{
            if(element.item.id === itemDetails.id){
                return true;
            }
            return false;
        })){
            for(let i=0;i<user.cart.length;i++){
                if(itemDetails.id === user.cart[i].item.id){
                    user.cart[i].count++;
                }
            }
        }else{
            let obj = {
                item: itemDetails,
                count: 1
            }
            user.cart.push(obj);
        }
        console.log(user.cart)
    }

    return(
        <BorderDiv>
            <h3>{props.title}</h3>
            <span>{props.price}</span>
            <button>PRODUCT DETAILS</button>
            <button onClick={()=>AddToCart()}>QUICK ADD</button>
        </BorderDiv>
    )

}