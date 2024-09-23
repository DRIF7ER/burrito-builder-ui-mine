import { useState, useEffect } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls.js";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const gotOrders = getOrders()
    gotOrders.then(data => {
      console.log(data, '<-- HERE IN USE EFFECT')
      setOrders(data.orders)
    })
  }, []);

  function addOrder(e, aName, someIngredients) {
    console.log('IN SUBMIT')
    e.preventDefault();
    console.log(someIngredients, 'IN SUBMIT')
    let newOrder = {
      name: aName,
      ingredients: someIngredients
    }
    console.log('in else')
    fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(data => setOrders([...orders, data]))
      .catch(err => console.log(err.message))
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={ addOrder }/>
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
