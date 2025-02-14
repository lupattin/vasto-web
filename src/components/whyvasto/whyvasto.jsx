import styles from './styles.module.css'
import Image from 'next/image'
export default function WhyVasto () {
    

    return (
      <div className={styles.container} >
        <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
                <h5 className={styles.title}>
                  Why 
                  <Image src={"./img/vastoR.svg"} width={250} height={150} alt=''></Image>
                </h5>
            </div>
            <div>
                <div className={styles.animatedBox}> <p>B2B platform supplying F&V to regional supermarkets</p> </div>
                <div className={styles.animatedBox}> <p>For Producers</p> </div>
                <div className={styles.animatedBox}> <p>For Regional Supermarket</p> </div>
            </div>
        </div>
      </div>
    ); 
  }
