import React from 'react';

function CarList() {
  const cars = [
    { id: 1, name: 'Toyota Camry', price: 40 },
    { id: 2, name: 'Honda Accord', price: 35 },

  ];

  return (
    <div>
      <h1>Available Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - ${car.price}/day
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
