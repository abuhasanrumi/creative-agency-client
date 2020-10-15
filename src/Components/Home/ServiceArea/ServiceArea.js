import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServiceArea = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="pb-5">
            <h2 className="brand-text text-center my-5 brand-primary">Provide awesome <span className="brand-secondary">services</span></h2>
            <div className="card-deck py-5 row">
                {
                    services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;