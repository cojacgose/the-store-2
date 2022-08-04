import UserContext from "../contexts/UserContext"
import { useContext, useEffect } from "react"
import { useState } from "react";
import CartCard from "./cart/CartCard";
import { NavLink } from "react-router-dom";
//new object, with quantity and item id - we will need to unpack the user.cart into this new object, combining any items in cart that share an id, then we can feed this object into the CartCard, mapping it, with Quantity being one of the props.
//We will have a total - which will multiply quantity x price of each item instance, and then add them together
//This will also allow us to dynamically update the total before we get to the checkout
//The checkout will have a simplified list of the cart items



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

//need to add a cart subtotal here