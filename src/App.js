import { useState } from "react";
import axios from "axios";
import "./App.css";
import PokemonLogo from "./assets/pokemon-logo.png";

import PokemonStats from "./components/PokemonStats/PokemonStats";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState(false);
  const [pokemonStats, setPokemonStats] = useState({});

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonStats(response.data);
        console.log(response.data);
        setPokemonSearch(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="Header">
        <img className="logo" src={PokemonLogo} alt="pokemon-logo" />
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search</button>
      </div>
      <>
        {!pokemonSearch ? (
          <h1>Search a pokemon</h1>
        ) : (
          <PokemonStats pokemon={pokemonStats} />
        )}
      </>
    </div>
  );
}

export default App;
