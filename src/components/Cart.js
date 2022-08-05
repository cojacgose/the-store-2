import UserContext from "../contexts/UserContext"
import { useContext, useEffect } from "react"
import { useState } from "react";
import CartCard from "./cart/CartCard";
import { NavLink } from "react-router-dom";

export default function Cart(props){

    const[cartTotal,setCartTotal] = useState(0);
    const{user}=useContext(UserContext);

    useEffect(()=>{
        let total = 0;
        for(let i=0;i<user.cart.length;i++){
            total = total + (user.cart[i].item.price * user.cart[i].count)
        }
        setCartTotal(total)
    },[cartTotal,user.cart])

    function mapCart(){
        if(user.cart.length>0){
            return(
                <div>
                {user.cart.map(i=>{
                    return(
                        <div>
                            <CartCard
                                title={i.item.title}
                                price={i.item.price}
                                count={i.count}
                                item={i}
                            />
                        </div>
                    )
                })}
                    <div>Subtotal is: {cartTotal}</div>
                    <NavLink to='/checkout'>CEHCKOUT</NavLink>
                </div>
            )
        }else{
            return(
                <div>CART IS EMPTY</div>
            )
        }
    }

   return(mapCart());
}
