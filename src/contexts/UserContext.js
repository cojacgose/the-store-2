import {createContext, useState} from 'react';

const UserContext = createContext();

const Waldo = {
    firstName: "Waldo",
    lastName: "Faldo",
    email: "waldofaldo@gmail.com",
    password: "TGIF",
    address: "123 E Waldo St",
    state: "Illonois",
    city: "Chicago",
    creditcard: 8888888888888888,
    cart:[],
    previousOrders:[]
}

export function UserProvider({children}){
    const [user,setUser] = useState(Waldo);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [currentItem,setCurrentItem] = useState([]);

    function AddToCart(item, count){
        if(user.cart.some(element=>{ //checks to see if that type of item is already in the cart
            if(element.item.id === item.id){
                return true;
            }
            return false;
        })){
            for(let i=0;i<user.cart.length;i++){ //if the item is in the cart, we will increase its count by 1
                if(item.id === user.cart[i].item.id){
                    user.cart[i].count = (user.cart[i].count + count)
                }
            }
        }else{ //if the item is not in the cart, then we will add it as an object which contains the item and count
            let obj = {
                item: item,
                count: count
            }
            user.cart.push(obj);
        }
        console.log(user.cart)
    }

    function RemoveFromCart(item){
        if(user.cart.some(element=>{ //checks to see if that type of item is already in the cart
            if(element.item.id === item.id){
                return true;
            }
            return false;
        })){
            for(let i=0;i<user.cart.length;i++){ //if the item is in the cart, we will increase its count by 1
                if(item.id === user.cart[i].item.id){
                    user.cart[i].count = (user.cart[i].count - 1)
                }
            }
        }
    }

    //We can add state variables here that can now be passed to the children
    return (
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, currentItem, setCurrentItem, AddToCart, RemoveFromCart}}>{children}</UserContext.Provider>
    )
}

export default UserContext;