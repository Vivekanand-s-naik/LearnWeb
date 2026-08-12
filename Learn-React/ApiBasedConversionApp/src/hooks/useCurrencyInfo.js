//  A React hook that fetches the data from this url based on the curreency type and export the function thet returns the data 
import { useEffect, useState } from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(res => setData(res[currency]))
    }, [currency, url])
    return data
}
export default useCurrencyInfo;