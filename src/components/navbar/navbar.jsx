import styles from './styles.module.css';
import Link from "next/link";
import Image from 'next/image';
export default function Navbar() {
    return (

      <div className={styles.container} >
        <div>
          <Image className={styles.img} src={"/img/vastoRsandLight.png"} width={74} height={16} alt='logoVastoRegistrado'></Image>
        </div>
        <div className={styles.containerLinks}>
          <Link href={''}>Home</Link>
          <Link href={'./'}>About Us</Link>
          <button className={styles.containerButton}>Get in touch</button>
        </div>
      </div>
    ); 
  }