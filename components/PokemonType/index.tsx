import React from "react";
import styles from "../../styles/Card.module.css";

interface PokemonTypeContainerProps {
  children: React.ReactNode;
}

const PokemonType: React.FC<PokemonTypeContainerProps> = ({ children }) => {
  return <div className={styles.pokemonTypeNodes}>{children}</div>;
};

export default PokemonType;
