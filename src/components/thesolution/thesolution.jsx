import styles from './styles.module.css';
import Image from 'next/image';

export default function Thesolution () {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>SOLUTION</h2>
            </div>
            <div className={styles.containerCards}>
            <div className={styles.containerCard}>
                <Image className={styles.image} src={"/img/centralizedS.png"} width={85} height={85} alt='icon centralized supplier'></Image>
                <h4 className={styles.containerTitleCard}>Centralized supplier chain</h4>
                <p className={styles.containerText}>Economies of scale for better prices and an efficient supply chain</p>
            </div>
            <div className={styles.containerCard}>
                <Image  className={styles.image} src={"/img/demandS.png"} width={65} height={65} alt='icon demand forecasting'></Image>
                <h4 className={styles.containerTitleCard}>Demand forecasting</h4>
                <p className={styles.containerText}>Data-driven demans planning to optimize product availability in stories</p>
            </div>
            <div className={styles.containerCard}>
                <Image className={styles.image} src={"/img/wasteS.png"} width={85} height={85} alt='icon waste reduction'></Image>
                <h4 className={styles.containerTitleCard}>Waste reduction</h4>
                <p className={styles.containerText}>Audits to minimize shrinkage and ensure product quality</p>
            </div>
            <div className={styles.containerCard}>
                <Image  className={styles.image} src={"/img/boostingS.png"} width={95} height={95} alt='icon boosting competitiveness'></Image>
                <h4 className={styles.containerTitleCard}>Boosting competitiveness</h4>
                <p className={styles.containerText}>Strategic investment in key products to increase store traffic</p>
            </div>
            </div>
        </div>
    )
}