import React from "react";
import styles from "../../styles/ninetales.module.css";
import ninetales from "../../assets/ninetales.svg";
import Image from "next/image";
import iceType from "../../assets/iceType.svg";
import fairyType from "../../assets/fairyType.svg";
import Head from "next/head";

const Ninetales: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ninetales card</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.pokemonNumber}>Nº 038</h2>
            <h1 className={styles.title}>Ninetales</h1>
          </div>

          <div className={styles.infoContainer}>
            <p className={styles.verticalText}>REGION: ALOLAN</p>
            <div>
              <p>Height: 1.1 m</p>
              <p>Weight: 19.9 kg</p>
            </div>
            <div className={styles.pokemonType}>
              <div>
                <Image src={iceType} alt={"icetype"} height="64" />
                <Image src={fairyType} alt={"fairyType"} height="64" />
              </div>
              <div className={styles.testep}>
                <div className={styles.pokemonStats}>
                  <h1>Base stats:</h1>
                  <div className={styles.statsContainer}>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>HP:</strong> 95
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>ATTACK:</strong> 65
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>DEFENSE:</strong> 130
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SP. ATK:</strong> 60
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SP. DEF:</strong> 130
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SPEED:</strong> 65
                    </div>
                  </div>
                </div>
              </div>
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
