//App.tsx

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