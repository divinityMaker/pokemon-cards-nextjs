import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.main}>
      <Link href={'/giratina'}>Giratina</Link>
      <br/>
      <Link href={'/ninetales'}>Ninetales</Link>
    </div>
  )
}

export default Home;