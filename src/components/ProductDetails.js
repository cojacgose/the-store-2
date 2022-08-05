import {useParams} from 'react-router-dom'
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

export default function ProductDetails(){

    const {currentItem}=useContext(UserContext);
    const{id} = useParams();
    //when clicking on a product, that information will be sent to the User context, then when this page loads, it will pass that information into this page with full details
    console.log(id);

    return (
       <div>
            <h1>{currentItem.title}</h1>
            <p>{currentItem.description}</p>
            <img src={currentItem.image} alt={currentItem.title}/>
            <div>RATING: {currentItem.rating.rate}</div>
       </div>
    )
}