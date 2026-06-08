import React from "react";
import { Tipos } from "./Tipos";

export function Pokemon({ pokemon }) {

  const id =
    pokemon.url
      ?.split("/")
      .filter(Boolean)
      .pop();

  return (

    <div className="personajes">
      <img

        src={
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }

        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <Tipos
      url={pokemon.url}
      />
    </div>
  );
}