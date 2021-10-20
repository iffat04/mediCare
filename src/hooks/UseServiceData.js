import { useEffect, useState } from 'react';

const UseServiceData = () => {
    const[services,setService]=useState([]);

    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
        .catch(error=>console.log(error.message))
    },[]);
   //console.log(services)
    return [services];
};

export default UseServiceData;