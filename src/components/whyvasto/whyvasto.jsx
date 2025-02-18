/* "use client"

import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react';
export default function WhyVasto () {
    
  const [hoveredBox, setHoveredBox] = useState(null);

  const hoverTexts = {
    1: (
      <>
       - Full quality traceability and price benchmark <br />
       - More than 40 products and growing
      </>
    ),
    2: (
      <>
       - Long-term, guaranteed highvolume purchases <br />
       - Eliminating corruptionr RMKTs <br />
       - Timely payments 
      </>
    ),
    3: (
      <>
       - Weekly commercial strategies <br />
       - Intuitive cloud-based app <br />
       - Trusted supplier network
      </>
    ),
  };

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
                {["B2B platform supplying F&V to regional supermarkets", "For Producers", "For Regional Supermarket"].map((text, index) => (
                <div
                  key={index}
                  className={`${styles.animatedBox} ${hoveredBox === index ? styles.hovered : ""}`}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  <p>{hoveredBox === index ? hoverTexts[index + 1] : text}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    ); 
  }
 */