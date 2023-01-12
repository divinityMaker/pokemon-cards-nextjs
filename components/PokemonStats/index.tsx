import React from "react";
import styles from "../../styles/Card.module.css";

interface Stats {
  hp: string;
  attack: string;
  defense: string;
  spatk: string;
  spdef: string;
  speed: string;
}

interface PokemonStatsProps {
  stats: Stats;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <div className={styles.pokemonStatsContainer}>
      <div className={styles.pokemonStats}>
        <h1>Base stats:</h1>
        <div className={styles.statsContainer}>
          <div className={styles.individualStats}>
            <p>
              <strong>HP:</strong> {stats.hp}
            </p>
          </div>
          <div className={styles.individualStats}>
            <p>
              <strong>ATTACK:</strong> {stats.attack}
            </p>
          </div>
          <div className={styles.individualStats}>
            <p>
              <strong>DEFENSE:</strong> {stats.defense}
            </p>
          </div>
          <div className={styles.individualStats}>
            <p>
              <strong>SP. ATK:</strong> {stats.spatk}
            </p>
          </div>
          <div className={styles.individualStats}>
            <p>
              <strong>SP. DEF:</strong> {stats.spdef}
            </p>
          </div>
          <div className={styles.individualStats}>
            <p>
              <strong>SPEED:</strong> {stats.speed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
