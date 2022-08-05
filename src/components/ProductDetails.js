import {useParams} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

export default function ProductDetails(){

    const {currentItem}=useContext(UserContext);
    const{id} = useParams();
    const{user} = useContext(UserContext);
    const{AddToCart} = useContext(UserContext);
    const[itemCount,setItemCount]=useState(1);

    return (
       <div>
            <h1>{currentItem.title}</h1>
            <p>{currentItem.description}</p>
            <img src={currentItem.image} alt={currentItem.title}/>
            <div>RATING: {currentItem.rating.rate}</div>
            <input type="number" value={itemCount} onChange={(e)=>{setItemCount(e.target.valueAsNumber)}}/>
            <button onClick={()=>AddToCart(currentItem,itemCount)}>ADD TO CART</button>
       </div>
    )
}