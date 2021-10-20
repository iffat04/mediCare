import React from 'react';

const Doctor = ({doctor}) => {
    const {name,degree,Fees,Time,specialist}= doctor;
    console.log(name)
    return (
        <div className="container">
            
            <div className="card border-warning mb-3">
                <div class="card-header"><h4>{specialist}</h4></div>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{degree}</p>
                </div>
                </div>
        </div>
    );
};

export default Doctor;