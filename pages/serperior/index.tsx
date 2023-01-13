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

import styles from "../../styles/serperior.module.css";
import serperior from "../../assets/serperior.svg";
import grassType from "../../assets/grassType.svg";

const pokemonStats = {
  hp: "75",
  attack: "75",
  defense: "95",
  spatk: "75",
  spdef: "95",
  speed: "113",
};

const pokemonInfo = {
  region: "UNOVA",
  height: "3.3 m",
  weight: "63.0 kg",
};

const Serperior: React.FC = () => {
  return (
    <>
      <Head>
        <title>Serperior card</title>
        <link rel="icon" href="/serperiorIcon.ico" />
      </Head>
      <div className={styles.main}>
        <PokemonContainer>
          <PokemonHeader name={"Serperior"} number={"497"} />
          <PokemonInfo info={pokemonInfo} />
          <PokemonRightPart>
            <PokemonType>
              <Image src={grassType} alt={"grass type"} height={64} width={64} />
            </PokemonType>
            <PokemonStats stats={pokemonStats} />
          </PokemonRightPart>
          <Image
            priority
            className={styles.image}
            src={serperior}
            alt={"serperior image"}
          />
          <PokemonJaponeseName name={"ジャローダ"} />
        </PokemonContainer>
      </div>
    </>
  );
};

export default Serperior;
