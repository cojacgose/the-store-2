import {useParams} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    width:30vw;
    text-align:center;
`

const ImgDetail = styled.img`
    height:50vh;
`

export default function ProductDetails(){

    const {currentItem}=useContext(UserContext);
    const{id} = useParams();
    const{user} = useContext(UserContext);
    const{AddToCart} = useContext(UserContext);
    const[itemCount,setItemCount]=useState(1);

    return (
       <Container>
            <h3>PRODUCT</h3>
            <h1>{currentItem.title}</h1>
            <p>{currentItem.description}</p>
            <ImgDetail src={currentItem.image} alt={currentItem.title}/>
            <div>RATING: {currentItem.rating.rate}</div>
            <input type="number" value={itemCount} onChange={(e)=>{setItemCount(e.target.valueAsNumber)}}/>
            <button onClick={()=>AddToCart(currentItem,itemCount)}>ADD TO CART</button>
       </Container>
    )
}