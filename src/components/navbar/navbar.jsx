"use client"
import styles from './styles.module.css';
import Link from "next/link";
import Image from 'next/image';

import { useRouter } from "next/navigation";
export default function Navbar() {

  const router = useRouter();

  const handleGetInTouch = () => {
    if (window.location.pathname === "/about") {
      // Redirige a la página principal y espera que cargue antes de hacer scroll
      router.push("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 2000); // Espera un poco para asegurar que la página cargue
    } else {
      // Si ya está en la página principal, solo hace scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (

      <div className={styles.container} >
        <div>
          <Image className={styles.img} src={"/img/vastoRsandLight.png"} width={74} height={16} alt='logoVastoRegistrado'></Image>
        </div>
        <div className={styles.containerLinks}>
          <Link href={'./'}>Home</Link>
          <Link href={'./about'}>About Us</Link>
          <button className={styles.button} onClick={handleGetInTouch}>
          Get in touch
        </button>
        </div>
      </div>
    ); 
  }

  /*  */