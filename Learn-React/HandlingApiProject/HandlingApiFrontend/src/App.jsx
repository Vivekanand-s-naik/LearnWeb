import { useEffect, useState } from 'react'

import './App.css';
import LazyList from './components/List';
import axios from 'axios'


function App() {
    const [catrgory, setCatrgory] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);
    console.count("App Render")

    const getData = (signal, query) => {
        console.log("Getting Data From APi...");
        ; (async () => {
            try {
                setError("");
                setloading(true);
                const response = await axios.get(`/api/products?category=${query}`, {
                    signal: signal
                });
                setData(response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Axios Error : ", error.message);
                    return
                }
                setError(error.message);
            } finally {
                setloading(false);
            }
        })();
    }
    useEffect(() => {
        const controller = new AbortController();
        if (catrgory === "")
            return 
        const timer = setTimeout(() => {
            console.count("Getting the data")

            getData(controller.signal, catrgory)
        }, 5000);
        return () => {
            clearTimeout(timer);
            controller.abort();
        }
    }, [catrgory])
    console.log("loading : ", loading);

    return error ? (
        <div className="">
            {error}
        </div>
    ) : (
        (
            loading ? (
                <div className="">Loading</div>
            ) : (
                <div className="div">
                    {
                        data &&

                        <div className="">
                            <LazyList items={data} />
                            <p>{data.length}</p>
                        </div>
                    }

                    <input type="text" placeholder='Enter Product Category' onChange={(e) => {
                        setCatrgory(e.target.value);
                    }} />
                    <button onClick={() => setCatrgory(prev => prev)}>Get Data</button>


                </div>
            )
        )

    )
}

export default App
