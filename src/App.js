import { useEffect, useState } from 'react';
import './App.css';
import UserData from './component/data/data.json'
import User from './component/User/User';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(UserData);
  }, [])

  return (
    <div className="App">
      <h1>Total User {user.length}</h1>
      <div id="user">
      <div id="userParent">
        {
          user.map(user => <User user={user} key={user.id}>  </User>)
        }
      </div>

      </div>
     
    </div>
  );
}

export default App;
