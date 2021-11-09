import React from "react";
import styled from "styled-components";
import "./PokemonStats.css";

// const DetailsCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   text-transform: capitalize;
//   font-size: 1.13rem;
// `;

const PokemonDetails = styled.div`
  display: flex;
`;

const PokemonArt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

const PokeImg = styled.img`
  height: 15rem;
`;

const PokeStats = styled.div`
  margin-left: 1rem;
`;

const PokemonStats = ({ pokemon }) => {
  const style = `details-card ${pokemon.types[0].type.name}`;
  return (
    <div className={style}>
      <h3>#{pokemon.id}</h3>
      <PokemonDetails>
        <PokemonArt>
          <PokeImg
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
        </PokemonArt>
        <PokeStats>
          <p>Type: {pokemon.types[0].type.name}</p>
          <p>hp: {pokemon.stats[0].base_stat}</p>
          <p>Attack: {pokemon.stats[1].base_stat}</p>
          <p>Defense: {pokemon.stats[2].base_stat}</p>
          <p>Speed: {pokemon.stats[5].base_stat}</p>
        </PokeStats>
      </PokemonDetails>
    </div>
  );
};

export default PokemonStats;
