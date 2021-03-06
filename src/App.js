import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'
import Pies from './components/Pies/Pies'



function App() {
const [sessionToken, setSessionToken] = useState(undefined);



  const viewconductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth updateToken={setSessionToken} />
  }

  return (
    <div className="App">
    
      <Navbar />
      {viewconductor()}
    </div>
  );
}

export default App;
