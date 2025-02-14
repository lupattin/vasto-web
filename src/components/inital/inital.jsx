import styles from './styles.module.css'
import Image from 'next/image';
export default function Initial() {
    return ( <>
      <div className={styles.container} >
        <div className={styles.containerHero}>
            <h1 className={styles.titletag}>Empowering<br/> regional <br/>supermarkets</h1>
            <p className={styles.paragraphtag}>Vasto empowers regional supermarkets with better pricing, quality, and efficiency through <br/> technology-driven supply chain optimization</p>
        </div>
        <Image src={"/img/backvastofoodfield.png"} alt='imagenCampoSembrado' fill style={{zIndex: '-1'} }></Image>
      </div>
      </>
    );
  }