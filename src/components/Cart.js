import UserContext from "../contexts/UserContext"
import { useContext } from "react"
import { useState } from "react";

//new object, with quantity and item id - we will need to unpack the user.cart into this new object, combining any items in cart that share an id, then we can feed this object into the CartCard, mapping it, with Quantity being one of the props.
//We will have a total - which will multiply quantity x price of each item instance, and then add them together
//This will also allow us to dynamically update the total before we get to the checkout
//The checkout will have a simplified list of the cart items



export default function Cart(props){

    const[cartTotal,setCartTotal] = useState(0);
    const{user}=useContext(UserContext);

    return(
        <>
        <div>THIS WILL BE THE CART PAGE</div>
        <div>{cartTotal}</div>
        </>
    )
}