import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./products/ProductCard";
import styled from "styled-components";

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
                        image={i.image}
                        price={i.price}
                        details={i}
                    />
                </div>
            )
        })
    )
}