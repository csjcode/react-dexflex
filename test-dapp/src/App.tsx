//App.tsx
// https://dev.to/ccoyotedev/building-an-aavegotchi-dapp-using-react-web3-2noe

import { useEffect } from 'react';
import './App.css';

function App() {

 const fetchGotchis = () => {
   console.log('Hello fren');
 }

 useEffect(() => {
   fetchGotchis();
 }, [])

 return (
   <div className="App">
   </div>
 );
}

export default App;