import { useContext } from "react"
import UserContext from "../../contexts/UserContext"

export default function CartCard(props){
    const{RemoveFromCart}=useContext(UserContext);
        return(
            <div>
                <h3>{props.title}</h3>
                <div>TOTAL: {props.count * props.price}</div>
                <div>COUNT: {props.count}</div>
                <button onClick={()=>RemoveFromCart(props.item.item)}>X</button>
            </div>
        )

}

//We will have to add the Count in an editable input, with +/- buttons