import {useParams} from 'react-router-dom'

export default function ProductDetails(){

    const{id} = useParams();
    //when clicking on a product, that information will be sent to the User context, then when this page loads, it will pass that information into this page with full details
    console.log(id);

    return (
        <>
            <div>THIS WILL BE THE PRODUCT DETAILS FOR {id}</div>
        </>
    )
}