import { useEffect, useState } from 'react';
import { Gotchi, QueryResponse } from './types';
import { request } from "graphql-request";
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';


function App() {

  const [ gotchis, setGotchis ] = useState<Array<Gotchi>>([]);

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
    const response = await request<QueryResponse>(uri, query);
    setGotchis(response.aavegotchis)
   }
    useEffect(() => {
        fetchGotchis();
      }, [])
      return (
        <div className="App">
          <div className="container">
            <div className="selected-container">
            </div>
            <div className="gotchi-list">
            </div>
          </div>
        </div>
      );
    }


export default App;