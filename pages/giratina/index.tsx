import React from "react";

import Head from "next/head";
import Image from "next/image";

import PokemonHeader from "../../components/PokemonHeader";
import PokemonStats from "../../components/PokemonStats";
import PokemonType from "../../components/PokemonType";
import PokemonInfo from "../../components/PokemonInfo";

import styles from "../../styles/giratina.module.css";
import giratina from "../../assets/giratina.svg";
import ghostType from "../../assets/ghostType.svg";
import dragonType from "../../assets/dragonType.svg";

const pokemonStats = {
  hp: "150",
  attack: "100",
  defense: "120",
  spatk: "1",
  spdef: "1",
  speed: "90",
};

const pokemonInfo = {
  region: "DISTORTION WORLD",
  height: "4.5 m",
  weight: "750.0 kg",
};

const Giratina: React.FC = () => {
  return (
    <>
      <Head>
        <title>Giratina card</title>
        <link rel="icon" href="/giratinaIcon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <PokemonHeader name={"Giratina"} number={"487"} />
          <div className={styles.infoContainer}>
            <PokemonInfo info={pokemonInfo} />
            <div className={styles.pokemonType}>
              <PokemonType>
                <Image
                  src={ghostType}
                  alt={"ghostype"}
                  height={64}
                  width={64}
                />
                <Image
                  src={dragonType}
                  alt={"dragontype"}
                  height={64}
                  width={64}
                />
              </PokemonType>
              <PokemonStats stats={pokemonStats} />
            </div>
          </div>

          <div>
            <Image
              priority={true}
              className={styles.image}
              src={giratina}
              alt={"giratina image"}
            />

            <h1 className={styles.japoneseName}>ギラティナ</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giratina;
