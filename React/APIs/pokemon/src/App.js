import {useState} from 'react';
import './App.css';

function App() {

  const[pokemon, setPokemon] = useState([])
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json()
      }).then (response => {
        console.log(response)
        setPokemon(response.results)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <button onClick = {fetchPokemon} >Fetch Pokemon</button>
      <h1>Pokemon list</h1>
      <hr/>
      {/* {JSON.stringify(pokemon)} */}
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pkm, index) => {
            return(
              <tr key={index}>
                <td>
                  {pkm.name}
                </td>
                <td>
                  {pkm.url}
                </td>
              </tr>
          )})}
        </tbody>
      </table>


    </div>
  );
}

export default App;
