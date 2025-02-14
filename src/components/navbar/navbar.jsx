"use client"
import styles from './styles.module.css';
import Link from "next/link";
import Image from 'next/image';
export default function Navbar() {
    return (

      <div className={styles.container} >
        <div>
          <Image src={"/img/vastoRsandLight.png"} width={74} height={16} alt='logoVastoRegistrado'></Image>
        </div>
        <div className={styles.containerLinks}>
          <Link href={'./'}>Home</Link>
          <Link href={'./about'}>About Us</Link>
          <button className={styles.containerButton} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get in touch</button>
        </div>
      </div>
    ); 
  }