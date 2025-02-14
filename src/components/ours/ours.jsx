import styles from './styles.module.css'
export default function Ours() {
  return (
    <div className={styles.container} >
        <div className={styles.textContainer}>
            <h4 className={styles.titleLeft}> OUR VISION </h4>
            <div></div>
            <p className={styles.pharagraphLeft}> To modernize the fresh produce industry with cutting-edge technlogy </p>
        </div>
        <div className={styles.textContainer}>
            <h4 className={styles.titleRight}> OUR MISSION </h4>
            <div></div>
            <p className={styles.pharagraphRight}> Become the broadest and  most reliable supplier for  regional supermarkets,  spear-heading their  technological evolution. </p>
        </div>
    </div>
  );
}
