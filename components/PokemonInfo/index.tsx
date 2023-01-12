import React from "react";
import styles from '../../styles/Card.module.css'

interface Data {
    region: string;
    height: string;
    weight: string;
}

interface PokemonInfoProps {
    info: Data
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({info}) => {
  return (
    <div className={styles.infoContainer}>
      <p className={styles.verticalText}>REGION: {info.region}</p>
      <div>
        <p>Height: {info.height}</p>
        <p>Weight: {info.weight}</p>
      </div>
    </div>
  );
};

export default PokemonInfo;
