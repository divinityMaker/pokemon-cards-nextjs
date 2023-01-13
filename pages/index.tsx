import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import ninetales from "../assets/ninetales.svg";
import giratina from "../assets/giratina.svg";
import serperior from "../assets/serperior.svg";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.content}>
          <Link href={"/ninetales"}>
            <Image
              src={ninetales}
              className={styles.image}
              alt={"ninetales image"}
            />
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <Link href={"/giratina"}>
            <Image
              src={giratina}
              className={styles.image}
              alt={"giratina image"}
            />
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <Link href={"/serperior"}>
            <Image
              src={serperior}
              className={styles.image}
              alt={"serperior image"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
