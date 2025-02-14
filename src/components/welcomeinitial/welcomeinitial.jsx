import styles from './styles.module.css'

export default function Welcomeinitial() {
    return (
        <div className={styles.container}>
            <p className={styles.containerText}>Regional supermarkets <b>suffer from significant volatility in quality, supply, <br /> and 
            price of produce</b> due to highly marginalized suppliers, less purchasing power, <br /> and less technology than their national and international competitors</p>
        </div>
    );
}