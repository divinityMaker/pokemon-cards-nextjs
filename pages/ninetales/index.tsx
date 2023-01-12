import React from "react";
import styles from "../../styles/ninetales.module.css";
import ninetales from "../../assets/ninetales.svg";
import Image from "next/image";
import iceType from "../../assets/iceType.svg";
import fairyType from "../../assets/fairyType.svg";
import Head from "next/head";
import PokemonHeader from "../../components/PokemonHeader";
import PokemonInfo from "../../components/PokemonInfo";
import PokemonStats from "../../components/PokemonStats";
import PokemonType from "../../components/PokemonType";

const pokemonStats = {
  hp: "150",
  attack: "100",
  defense: "120",
  spatk: "1",
  spdef: "1",
  speed: "90",
};

const pokemonInfo = {
  region: 'ALOLAN',
  height: '1.1 m',
  weight: '19.9 kg'
}

const Ninetales: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ninetales card</title>
        <link rel="icon" href="/ninetalesIcon.ico" />
      </Head>
      <div className={styles.main}>
      <div className={styles.container}>
          <PokemonHeader name={"Ninetales"} number={"038A"} />
          <div className={styles.infoContainer}>
            <PokemonInfo info={pokemonInfo} />
            <div className={styles.pokemonType}>
              <PokemonType>
                <Image
                  src={iceType}
                  alt={"iceType"}
                  height={64}
                  width={64}
                />
                <Image
                  src={fairyType}
                  alt={"fairyType"}
                  height={64}
                  width={64}
                />
              </PokemonType>
              <PokemonStats stats={pokemonStats} />
            </div>
          </div>

          <div className={styles.teste}>
            <Image
              className={styles.image}
              src={ninetales}
              alt={"ninetales image"}
            />
          </div>

          <div className={styles.teste}>
            <h1 className={styles.japoneseName}>キュウコン</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ninetales;
