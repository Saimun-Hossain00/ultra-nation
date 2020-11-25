import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() { 
 const [countries, setCountries]= useState([])
 const [cart,setCart] = useState([])
 
 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data=>{
     setCountries(data);
     const names = data.map(country => country.name)
   
    })
 }, [])

 const handelAddCountry = (country) =>{
   const newCart = [...cart, country];
   setCart(newCart);
  }

  return (
    <div className="App">
  <h1>countries loadaed:{countries.length}</h1>
  <h4>Country added:{cart.length}</h4>
  <Cart cart={cart}></Cart>
  <ul>
    {
     countries.map(country => <Country country={country} handelAddCountry={handelAddCountry}></Country>)
    }
  </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
