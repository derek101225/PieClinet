import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'
import Pies from './components/Pies/Pies'



function App() {
const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken)

useEffect(() => {
  if(localStorage.getItem('token')) {
    setSessionToken(localStorage.getItem('token'));
  }
});

const updateLocalStorage = newToken => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
}

const clearLocalStorage = () => {
  localStorage.clear();
  setSessionToken(undefined);
}

  const viewconductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth updateLocalStorage={updateLocalStorage} />
  }

  return (
    <div className="App">
      <Navbar Logout={clearLocalStorage} />
      {viewconductor()}
    </div>
  );
}

export default App;
