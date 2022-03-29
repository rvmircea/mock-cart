import React, { useState } from "react";
import Info from "./Info";

const ProdusCos = ({ produs, id, currency, btnHandler, quantityHandler, idx }) => {

    const [visible, setVisible] = useState(false);

    const hoverHandle = () => {
        setVisible(!visible);
    }
    
    return (
        <li key={id}>
            <div>
                {produs.name}
                <button id="info" onMouseEnter={()=>hoverHandle()} onMouseLeave={()=>hoverHandle()}>i</button>
                <Info text={produs.description} visible={visible} />
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

            Quantity:
            <input  type="number" size="3" min='1' onChange={(e) => quantityHandler(e, idx)}/>
            <button id="btn-remove" onClick={() => btnHandler(produs.id)}>
                Remove from cart
            </button>
        </li>
    )
}
export default ProdusCos;