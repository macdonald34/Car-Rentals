import React, { useState } from 'react';
import './App.css';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/components/HomePage';
import AboutUs from './src/components/AboutUs';
import CarList from './src/components/CarList';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const cars = [
    { id: 1, name: 'Toyota Camry', price: 50, description: 'Comfortable sedan for daily commute' },
    { id: 2, name: 'Honda CR-V', price: 75, description: 'Spacious SUV for family trips' },
    { id: 3, name: 'Ford Mustang', price: 100, description: 'Sports car for adventure seekers' },
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUs />;
      case 'cars':
        return <CarList cars={cars} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('cars')}>Cars</button>
        <button onClick={() => setCurrentPage('about')}>About Us</button>
      </nav>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export { Header, Footer, HomePage, AboutUs, CarList };
export default App;