import React from "react";

import Head from "next/head";
import Image from "next/image";

import PokemonHeader from "../../components/PokemonHeader";
import PokemonStats from "../../components/PokemonStats";
import PokemonType from "../../components/PokemonType";
import PokemonInfo from "../../components/PokemonInfo";
import PokemonContainer from "../../components/PokemonContainer";
import PokemonRightPart from "../../components/PokemonRightPart";
import PokemonJaponeseName from "../../components/PokemonJaponeseName";

import styles from "../../styles/ninetales.module.css";
import ninetales from "../../assets/ninetales.svg";
import iceType from "../../assets/iceType.svg";
import fairyType from "../../assets/fairyType.svg";

const pokemonStats = {
  hp: "73",
  attack: "67",
  defense: "75",
  spatk: "1",
  spdef: "1",
  speed: "109",
};

const pokemonInfo = {
  region: "ALOLAN",
  height: "1.1 m",
  weight: "19.9 kg",
};

const Ninetales: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ninetales card</title>
        <link rel="icon" href="/ninetalesIcon.ico" />
      </Head>
      <div className={styles.main}>
        <PokemonContainer>
          <PokemonHeader name={"Ninetales"} number={"038A"} />
          <PokemonInfo info={pokemonInfo} />
          <PokemonRightPart>
            <PokemonType>
              <Image src={iceType} alt={"iceType"} height={64} width={64} />
              <Image src={fairyType} alt={"fairyType"} height={64} width={64} />
            </PokemonType>
            <PokemonStats stats={pokemonStats} />
          </PokemonRightPart>
          <Image
            priority
            className={styles.image}
            src={ninetales}
            alt={"ninetales image"}
          />
          <PokemonJaponeseName name={"キュウコン"} />
        </PokemonContainer>
      </div>
    </>
  );
};

export default Ninetales;
