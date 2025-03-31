import React from 'react';
import { useParams } from 'react-router-dom';


function CarDetails() {
  const { id } = useParams();
  const car = { id: 1, name: 'Toyota Camry', price: 40, description: 'A comfortable midsize sedan.' };

  return (
    <div>
      <h1>{car.name}</h1>
      <p>{car.description}</p>
      <p>Price: ${car.price}/day</p>
    </div>
  );
}

export default CarDetails;
