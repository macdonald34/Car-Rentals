import React from 'react';

const CarDetails = ({ car }) => {
    return (
        <div>
            <h2>{car.name}</h2>
            <p>Price: ${car.price}/day</p>
            <p>Description: {car.description}</p>
        </div>
    );
};

export default CarDetails;