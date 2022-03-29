import React from "react";

const sum = arr =>{
    let aux = arr.reduce( (curr, total) =>{
        return curr + total;
    })
    return +(aux.toFixed(2));
}

const Total = ({price, currency}) =>{

    const total = sum(price);

    return (
        <div id="total"> 
        
            {currency === 'USD' &&
                <div id="price">
                    <span>Total </span>
                    ${price ? total : 0}
                </div>
            }

            {currency === 'EUR' &&
                <div id="price">
                    <span>Total </span>
                    €{price ? total : 0}
                </div>
            }

            {currency === 'GBP' &&
                <div id="price">
                    <span>Total </span>
                    £{price ? total : 0}
                </div>
            }
        </div>
    )
}

export default Total;