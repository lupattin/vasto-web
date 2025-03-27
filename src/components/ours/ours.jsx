"use client"
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ours() {
    const [animation, setAnimation] = useState({ vision: "fade-left", mission: "fade-right" });

    useEffect(() => {
        const updateAnimation = () => {
            if (window.innerWidth <= 480) {
                setAnimation({ vision: "fade-up", mission: "fade-up" });
            } else {
                setAnimation({ vision: "fade-left", mission: "fade-right" });
            }
        };

        updateAnimation();
        window.addEventListener("resize", updateAnimation);

        return () => window.removeEventListener("resize", updateAnimation);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, [animation]);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer} data-aos={animation.vision}>
                <h4 className={styles.titleLeft}> OUR VISION </h4>
                <div></div>
                <p className={styles.pharagraphLeft}> To modernize the fresh produce industry with cutting-edge technology </p>
            </div>
            <div className={styles.textContainer} data-aos={animation.mission}>
                <h4 className={styles.titleRight}> OUR MISSION </h4>
                <div></div>
                <p className={styles.pharagraphRight}> Become the broadest and most reliable supplier for regional supermarkets, spearheading their technological evolution. </p>
            </div>
        </div>
    );
}