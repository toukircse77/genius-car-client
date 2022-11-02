import React, { useEffect, useState } from 'react';
import servicesCard from './servicesCard';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl my-4 font-semibold">Our Service Area</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure assumenda rem! Officia, voluptatum assumenda!</p>
            </div>
            <div>
                {
                    services.map(service => <servicesCard
                    key={service._id}
                    service = {service}
                    ></servicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;