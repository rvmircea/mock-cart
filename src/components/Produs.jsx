import React from "react";


const Produs = ({ produs, id, currency, btnHandler }) => {

    return (
        <li key={id}>
            <div>
                {produs.name}
            </div>
            Price:

            {currency === 'USD' &&
                <div id="price">
                    ${produs.price}
                </div>
            }

            {currency === 'EUR' &&
                <div id="price">
                    €{produs.price}
                </div>
            }

            {currency === 'GBP' &&
                <div id="price">
                    £{produs.price}
                </div>
            }

            {currency}
            <button id="btn-add" onClick={() => btnHandler(produs.id)}>
                Add To Cart
            </button>
        </li>
    )
}

export default Produs;