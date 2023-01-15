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

import styles from "../../styles/thundurus.module.css";
import thundurus from "../../assets/thundurus.svg";
import eletricType from "../../assets/eletricType.svg";
import flyingType from "../../assets/flyingType.svg";

const pokemonStats = {
  hp: "79",
  attack: "115",
  defense: "70",
  spatk: "1",
  spdef: "1",
  speed: "111",
};

const pokemonInfo = {
  region: "COBALT COAST LANDS",
  height: "1.5 m",
  weight: "61.0 kg",
};

const Thundurus: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thundurus card</title>
        <link rel="icon" href="/thundurusIcon.ico" />
      </Head>
      <div className={styles.main}>
        <PokemonContainer>
          <PokemonHeader name={"Thundurus"} number={"642"} />
          <PokemonInfo info={pokemonInfo} />
          <PokemonRightPart>
            <PokemonType>
              <Image src={eletricType} alt={"eletric type"} height={64} width={64} />
              <Image src={flyingType} alt={"flying type"} height={64} width={64} />
            </PokemonType>
            <PokemonStats stats={pokemonStats} />
          </PokemonRightPart>
          <Image
            priority
            className={styles.image}
            src={thundurus}
            alt={"thundurus image"}
          />
          <PokemonJaponeseName name={"ボルトロス"} />
        </PokemonContainer>
      </div>
    </>
  );
};

export default Thundurus;
