"use client"
import styles from './styles.module.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Ours() {

useEffect(() => {
        AOS.init({
              duration: 1000, // Duración de la animación
              once: false, // Para que solo ocurra una vez
        });
    }, []);

return (
    <div className={styles.container} >
        <div className={styles.textContainer} data-aos="fade-left">
            <h4 className={styles.titleLeft}> OUR VISION </h4>
            <div></div>
            <p className={styles.pharagraphLeft}> To modernize the fresh produce industry with cutting-edge technlogy </p>
        </div>
        <div className={styles.textContainer} data-aos="fade-right">
            <h4 className={styles.titleRight}> OUR MISSION </h4>
            <div></div>
            <p className={styles.pharagraphRight}> Become the broadest and  most reliable supplier for  regional supermarkets,  spear-heading their  technological evolution. </p>
        </div>
    </div>
);
}
