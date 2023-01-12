import React from "react";

import styles from "../../styles/Card.module.css";

interface PokemonContainerProps {
  children: React.ReactNode;
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({ children }) => {
  return <div className={styles.pokemonContainer}>{children}</div>
};

export default PokemonContainer;
