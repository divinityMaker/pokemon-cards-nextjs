import React from "react";
import styles from '../../styles/Card.module.css';

interface PokemonRightPartProps {
  children: React.ReactNode;
}

const PokemonRightPart: React.FC<PokemonRightPartProps> = ({ children }) => {
  return <div className={styles.pokemonRightSide}>{children}</div>;
};

export default PokemonRightPart;
