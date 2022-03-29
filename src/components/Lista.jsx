import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Produs from "./Produs";
import Cart from "./Cart";


const Lista = () => {

    //Am apelat api-ul de mai mult de 100 de ori, am folosit exchange rate-ul din data de 28.03.2022
    // const [rates, setRates] = useState([]);
    const rates2 = {
        "USD": 1.10,
        "EUR": 1,
        "GBP": 0.84,
    }

    let currencyParam = useParams();
    const [listaProduse, setListaProduse] = useState([]);
    const [currency, setCurrency] = useState(currencyParam.currency ? currencyParam.currency.toUpperCase() : "USD");
    const [cosProduse, setCosProduse] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // const moneyResponse = await axios("http://data.fixer.io/api/latest?access_key=bb540433bf623720dfb8ba40dd366e0b");
        
            // setRates(moneyResponse.data.rates);
            const res = await axios("http://private-32dcc-products72.apiary-mock.com/product");
            setListaProduse(res.data);
        }
        getData();
    }, [])

    //+(item.price * rates.USD).toFixed(2)
    const selectHandle = e => {
        if(e.target.value === "EUR"){
           let  tmpArr = [...listaProduse].map(item => {
               let aux = {...item};
               if(currency === "USD"){
                aux.price = +(aux.price / rates2.USD).toFixed(2);
               }
               if(currency === "GBP"){
                aux.price = +(aux.price / rates2.GBP).toFixed(2);
               }
               return aux;
           })
            setListaProduse(tmpArr);    
            // console.log(rates.USD, rates.EUR, rates.GBP);
        }
        
        if(e.target.value === "USD"){
            let  tmpArr = [...listaProduse].map(item => {
                let aux = {...item};
                if(currency === "EUR"){
                    aux.price = +(aux.price * rates2.USD).toFixed(2);
                   }
                   if(currency === "GBP"){
                    aux.price = +(aux.price / rates2.GBP * rates2.USD).toFixed(2);
                   }
                return aux;
            })
             setListaProduse(tmpArr);    
             // console.log(rates.USD, rates.EUR, rates.GBP);
         }

         if(e.target.value === "GBP"){
            let  tmpArr = [...listaProduse].map(item => {
                let aux = {...item};
                if(currency === "EUR"){
                    aux.price = +(aux.price * rates2.GBP).toFixed(2);
                   }
                   if(currency === "USD"){
                    aux.price = +(aux.price / rates2.USD * rates2.GBP).toFixed(2);
                   }
                return aux;
            })
             setListaProduse(tmpArr);    
             // console.log(rates.USD, rates.EUR, rates.GBP);
         }


        setCurrency(e.target.value)
    }

    const buttonHandle = (id) => {
        let modifiedData = [...listaProduse].filter(obj => obj.id !== id);
        let cosData = [...listaProduse].find(obj => obj.id === id);
        setListaProduse(modifiedData);
        setCosProduse(cosProduse => cosProduse.concat(cosData));
    }

    const cartHandle = (id) => {
        let modifiedData = [...cosProduse].filter(obj => obj.id !== id);
        let listData = [...cosProduse].find(obj => obj.id === id)
        setListaProduse(listaProduse => listaProduse.concat(listData));
        setCosProduse(modifiedData);
    }

    const produseSorted = [...listaProduse].sort((a, b) =>{
        return parseFloat(b.price) - parseFloat(a.price);
    })

    return (
        <> 
        <div id="container">
            <ul id="lista">
                {produseSorted.map(item => 
                    <Produs produs={item} key={item.id} currency={currency} btnHandler={buttonHandle}/>
                    )}
            </ul>
        <Cart produs={cosProduse} currency={currency} btnHandler={cartHandle}/>
        </div>      

        <select value={currency} onChange={selectHandle}>
            <option value={'USD'}>USD</option>
            <option value={'EUR'}>EUR</option>
            <option value={'GBP'}>GBP</option>
        </select>
        </>
    )
}

export default Lista