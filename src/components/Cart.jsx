import React, { useState } from "react";
import ProdusCos from "./ProdusCos";
import Total from "./Total";



const Cart = ({produs, currency, btnHandler}) =>{
    
    const [quantity, setQuantity] = useState([]);

    let prices = [...produs].map( (item, idx) =>{
        let aux = {...item};
        if(quantity[idx] !== undefined){
            return aux.price * quantity[idx];
        }
        return aux.price;
    })
    
    const quantityHandler = (e, id) =>{
        let tmpArr = [...quantity];
        tmpArr[id] = e.target.value;
        setQuantity(tmpArr);
    } 


    return (
        <div id="cart">
            {produs.length ? 
                <>
                <p>Products in your shopping cart</p>
                <ul>
                    {produs.map((item, idx) => 
                        <ProdusCos produs={item} key={item.id} currency={currency} btnHandler={btnHandler} quantityHandler={quantityHandler} idx={idx}/>
                        )}
                </ul>
                
                <Total price={prices} currency={currency}/>
                </> 
            : 
            <>
                <p>No products in your shopping cart</p>
            </>
            }
        </div>
    )
}

export default Cart;