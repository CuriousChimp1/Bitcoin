import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [coins, setCoins] = useState([]);  


  //this is to get the values from api 
  useEffect(() =>{ 
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=rupee&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    //this is done like promises i.e when axios.get() happens
    // then this method works
    axios.then(res =>{
      setCoins(res.data);
      console.log(res.data);
    });
  });



  return (
    <div className="App">
      API
    </div>
  );
}

export default App;
