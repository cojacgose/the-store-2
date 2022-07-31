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
        if(user.cart.some(element=>{ //checks to see if that type of item is already in the cart
            if(element.item.id === itemDetails.id){
                return true;
            }
            return false;
        })){
            for(let i=0;i<user.cart.length;i++){ //if the item is in the cart, we will increase its count by 1
                if(itemDetails.id === user.cart[i].item.id){
                    user.cart[i].count++;
                }
            }
        }else{ //if the item is not in the cart, then we will add it as an object which contains the item and count
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