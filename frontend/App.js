import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>AMAZON ECOMMERCE PRODUCT MERN APP</h1>
      {productList.map((prodData) => {
        return <div className='ab'>
          <h2>Title: {prodData.title}</h2>
          <h3>Size: {prodData.size}</h3>
          <h4>Price: {prodData.price}</h4>
          <p><a href='#'>URL: {prodData.url}</a></p>
        </div>
      })}
    </div>
  );
}

export default App;
