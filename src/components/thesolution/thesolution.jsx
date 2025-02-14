import styles from './styles.module.css';
import Image from 'next/image';

export default function Thesolution () {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h2>THE SOLUTION</h2>
            </div>
            <div className={styles.containerCards}>
            <div className={styles.containerCard}>
                <Image className={styles.image} src={"/img/centralizedicon.png"} width={85} height={85} alt='icon centralized supplier'></Image>
                <h4 className={styles.containerTitleCard}>Centralized <br /> supplier chain</h4>
                <p className={styles.containerText}>Economies of scale for better prices <br /> and an efficient supply chain</p>
            </div>
            <div className={styles.containerCard}>
                <Image  className={styles.image} src={"/img/demandicon2.png"} width={65} height={65} alt='icon demand forecasting'></Image>
                <h4 className={styles.containerTitleCard}>Demand <br /> forecasting</h4>
                <p className={styles.containerText}>Data-driven demans planning to <br /> optimize product availability in stories</p>
            </div>
            <div className={styles.containerCard}>
                <Image className={styles.image} src={"/img/wasteicon.png"} width={85} height={85} alt='icon waste reduction'></Image>
                <h4 className={styles.containerTitleCard}>Waste <br /> reduction</h4>
                <p className={styles.containerText}>Audits to minimize shrinkage <br /> and ensure product quality</p>
            </div>
            <div className={styles.containerCard}>
                <Image  className={styles.image} src={"/img/boostingicon.png"} width={85} height={85} alt='icon boosting competitiveness'></Image>
                <h4 className={styles.containerTitleCard}>Boosting <br /> competitiveness</h4>
                <p className={styles.containerText}>Strategic investment in key products <br /> to increase store traffic</p>
            </div>
            </div>
        </div>
    )
}