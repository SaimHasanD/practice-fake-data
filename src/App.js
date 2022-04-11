import { useEffect, useState } from 'react';
import './App.css';
import UserData from './component/data/data.json'
import User from './component/User/User';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(UserData);
  }, [])

  const [cart, setCart] = useState([]);

  const handleAddUser = (users) => {
    const newCart = [...cart, users];
    setCart(newCart);
  }

  // let totalIncome = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const user = cart[i];
  //   totalIncome = totalIncome + Number( user.yearlyIncome);
  // }
  const totalIncome = cart.reduce((totalIncome, cart) => totalIncome + Number(cart.yearlyIncome), 0) 

  return (
    <div className="App">
        <div id="addedInfo">
        <h1>Total Added Friends: {cart.length}</h1>
      <h1>Total yearly Income: ${totalIncome}</h1>
      <div>
        Friends Name
      {
        cart.map((cart) => <li key={cart.index}>{cart.name}</li> )
      }
        </div>
      </div>
      <div id="user">
        <div id="userParent">
          {
            user.map(user => <User user={user} handleAddUser={handleAddUser} key={user.id}>  </User>)
          }
        </div>

      </div>

    </div>
  );
}

export default App;
