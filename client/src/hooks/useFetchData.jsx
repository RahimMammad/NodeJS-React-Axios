import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get("http://localhost:5500")
                console.log(response.data);
                setData(response.data)
            } 
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [])
  return {data};
}

export default useFetchData