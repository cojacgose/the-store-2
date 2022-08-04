export default function CartCard(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <div>TOTAL: {props.count * props.price}</div>
            <div>COUNT: {props.count}</div>
        </div>
    )
}

//We will have to add the Count in an editable input, with +/- buttons