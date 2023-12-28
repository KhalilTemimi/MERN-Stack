import{useState} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const[pokemon, setPokemon] = useState([])
  const axiosPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then (response => {
        console.log(response)
        setPokemon(response.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <button onClick = {axiosPokemon} >Fetch Pokemon</button>
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