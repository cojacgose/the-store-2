export default function CheckoutList(props){

    return (
        props.list.map(item=>{
            return(
                <div>
                    ITEM: {item.item.title} COUNT: {item.count}
                </div>
            )
        })
    )
}