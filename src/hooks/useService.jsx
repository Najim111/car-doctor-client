import { useEffect, useState } from "react";


const useService = () => {
    const[service, setService]=useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-alpha-ivory.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return service;
};

export default useService;