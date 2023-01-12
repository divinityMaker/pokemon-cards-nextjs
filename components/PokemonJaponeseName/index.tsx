import React from "react";

import styles from '../../styles/Card.module.css';

interface PokemonJaponeseNameProps {
  name: string;
}

const PokemonJaponeseName: React.FC<PokemonJaponeseNameProps> = ({ name }) => {
  return <h1 className={styles.japoneseName}>{name}</h1>;
};

export default PokemonJaponeseName;
