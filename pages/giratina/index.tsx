import React from "react";
import styles from "../../styles/giratina.module.css";
import ninetales from "../../assets/giratina.svg";
import Image from "next/image";
import ghostType from "../../assets/ghostType.svg";
import dragonType from "../../assets/dragonType.svg";
import Head from "next/head";

const Ninetales: React.FC = () => {
  return (
    <>
      <Head>
        <title>Giratina card</title>
        <link rel="icon" href="/giratinaIcon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.pokemonNumber}>Nº 038</h2>
            <h1 className={styles.title}>Giratina</h1>
          </div>

          <div className={styles.infoContainer}>
            <p className={styles.verticalText}>REGION: DISTORTION WORLD</p>
            <div>
              <p>Height: 4.5 m</p>
              <p>Weight: 750.0 kg</p>
            </div>
            <div className={styles.pokemonType}>
              <div className={styles.teste1}>
                <Image src={ghostType} alt={"ghostype"} height="64" width={64} />
                <Image src={dragonType} alt={"dragontype"} height="64" width={64} />
              </div>
              <div className={styles.testep}>
                <div className={styles.pokemonStats}>
                  <h1>Base stats:</h1>
                  <div className={styles.statsContainer}>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>HP:&nbsp;</strong> 150
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>ATTACK:&nbsp;</strong> 100
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>DEFENSE:&nbsp;</strong> 120
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SP. ATK:&nbsp;</strong> 1
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SP. DEF:&nbsp;</strong> 1
                    </div>
                    <div className={styles.individualStats}>
                      {" "}
                      <strong>SPEED:&nbsp;</strong> 90
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
            <h1 className={styles.japoneseName}>ギラティナ</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ninetales;
