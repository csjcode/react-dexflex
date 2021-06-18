// Tutorial source: https://dev.to/ccoyotedev/building-an-aavegotchi-dapp-using-react-web3-2noe
import { useEffect, useState } from 'react';
import { Gotchi, QueryResponse } from './types';
import { GotchiListing } from './components/GotchiListing';
import { SelectedGotchi } from './components/SelectedGotchi';
import { request } from "graphql-request";
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

function App() {

  const [ gotchis, setGotchis ] = useState<Array<Gotchi>>([]);
  const [ selectedGotchi, setSelectedGotchi ] = useState<number>(0);

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
              {gotchis.length > 0 && (
                <SelectedGotchi
                  name={gotchis[selectedGotchi].name} 
                  traits={gotchis[selectedGotchi].withSetsNumericTraits}
                />
              )}
            </div>
            <div className="gotchi-list">              
              {
                gotchis.map((gotchi, i) => (
                  <GotchiListing
                    key={gotchi.id}
                    id={gotchi.id}
                    name={gotchi.name}
                    collateralColor="black"
                    selectGotchi={() => setSelectedGotchi(i)}
                    selected={i === selectedGotchi}
                  />
                ))
              }
            </div>
          </div>
        </div>
      );
    }


export default App;