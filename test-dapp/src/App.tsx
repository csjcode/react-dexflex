import { useEffect } from 'react';
import { request } from "graphql-request";
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';


function App() {

  const fetchGotchis = async () => {

      const query = `
      {
        aavegotchis(first: 100, orderBy: gotchiId) {
          id
          name
          collateral
          withSetsNumericTraits
        }
      }
    `
    const response = await request(uri, query);
    console.log(response);
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