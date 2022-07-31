import { useEffect, useState } from "react";
import ProductCard from "./products/ProductCard";

export default function Products(props){

    const[isLoading,setIsLoading] = useState(false);
    const[items,setItems] = useState([]);

    async function getItems(){
        const response = await fetch('https://fakestoreapi.com/products');
        const items = await response.json();
        setItems(items);
        console.log(items);

    };

    useEffect(()=>{
        getItems();
    },[])
    
    return (
        items.map(i=>{
            return(
                <div>
                    <ProductCard    
                        title={i.title}
                        price={i.price}
                        details={i}
                    />
                </div>
            )
        })
    )
}