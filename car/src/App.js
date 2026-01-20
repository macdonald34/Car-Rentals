import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import CarList from './components/CarList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const cars = [
    { id: 1, name: 'Honda Pilot 2024', price: 120, rating: 4.8, image: 'https://images.unsplash.com/photo-1533473359331-35acda7ce3f1?w=400&h=300&fit=crop', category: 'SUV' },
    { id: 2, name: 'Honda Civic Sedan', price: 95, rating: 4.9, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 3, name: 'Toyota Camry', price: 110, rating: 4.7, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 4, name: 'Toyota RAV4', price: 115, rating: 4.8, image: 'https://images.unsplash.com/photo-1605559424843-9e4c3febae90?w=400&h=300&fit=crop', category: 'SUV' },
    { id: 5, name: 'Tesla Model 3', price: 150, rating: 5.0, image: 'https://images.unsplash.com/photo-1560958089-b8a46dd52a86?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 6, name: 'Ford Explorer', price: 135, rating: 4.6, image: 'https://images.unsplash.com/photo-1599361333363-74e6c6df1ce9?w=400&h=300&fit=crop', category: 'SUV' },
    { id: 7, name: 'Chevrolet Tahoe', price: 145, rating: 4.7, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', category: 'SUV' },
    { id: 8, name: 'BMW 3 Series', price: 125, rating: 4.9, image: 'https://images.unsplash.com/photo-1617469767537-b85ba699c72d?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 9, name: 'Mercedes-Benz C-Class', price: 140, rating: 4.8, image: 'https://images.unsplash.com/photo-1553882900-d5160c1d8d8d?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 10, name: 'Audi A4', price: 130, rating: 4.7, image: 'https://images.unsplash.com/photo-1552145552-5658cc8b201a?w=400&h=300&fit=crop', category: 'Sedan' },
    { id: 11, name: 'Range Rover Sport', price: 160, rating: 4.9, image: 'https://images.unsplash.com/photo-1606611013016-969c19d24e6f?w=400&h=300&fit=crop', category: 'SUV' },
    { id: 12, name: 'Mazda CX-5', price: 105, rating: 4.6, image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop', category: 'SUV' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage cars={cars} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'cars':
        return <CarList cars={cars} />;
      case 'signin':
        return <SignIn setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUp setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage cars={cars} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export { Header, Footer, HomePage, AboutUs, CarList, SignIn, SignUp };
export default App;