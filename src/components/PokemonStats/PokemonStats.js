import React from "react";
import "./PokemonStats.css";

const PokemonStats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <p>#{pokemon.id}</p>
      <div className="pokemon-details">
        <div className="pokemon-art">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <p className="pokemon-name">{pokemon.name}</p>
        </div>
        <div className="pokemon-stats">
          <p>Type: {pokemon.types[0].type.name}</p>
          <p>hp: {pokemon.stats[0].base_stat}</p>
          <p>Attack: {pokemon.stats[1].base_stat}</p>
          <p>Defense: {pokemon.stats[2].base_stat}</p>
          <p>Speed: {pokemon.stats[5].base_stat}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
