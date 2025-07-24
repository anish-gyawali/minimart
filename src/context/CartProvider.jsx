// Creating provider and value like last week. Same concept.
import { Children, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children})=>{
    const[cart, setCart] = useState([])

    const addToCart = (product)=>{
        setCart((prev)=>[...prev,product]) // this is spread syntax to add product with existing values
    }
    return(
        // we are pasing cart and addToCart globally.
        <CartContext.Provider value={{cart, addToCart}}> 
            {children}
        </CartContext.Provider>
    )
}