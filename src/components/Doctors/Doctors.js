import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const[doctors,setdoctor]=useState([]);
    useEffect(()=>{
        fetch("./doctor.json")
        .then(res=>res.json())
        .then(data=>setdoctor(data));

    },[])
    return (
            <div id="today-doc" className="my-5">
                < h1 className="my-3 text-center">Todays Doctor</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor=> <Doctor doctor={doctor} key={doctor.id}></Doctor>)            
                }
                    
                </div>
               
            </div>
        );
    
};

export default Doctors;