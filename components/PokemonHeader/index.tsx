import React from "react";

import styles from '../../styles/Card.module.css';

interface PokemonHeaderProps {
    number: string;
    name: string;
}

const PokemonHeader: React.FC<PokemonHeaderProps> = ({number, name}) => {
  return (
    <div>
      <h2 className={styles.pokemonNumber}>Nº {number}</h2>
      <h1 className={styles.pokemonName}>{name}</h1>
    </div>
  );
};

export default PokemonHeader;
