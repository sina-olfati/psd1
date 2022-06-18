import React from 'react'
import styles from "./Home.module.css"
// images
import shape from "./imgaes/shape.png"
import facebook from "./imgaes/facebook.png"
import instagram from "./imgaes/instagram.png"
import twitter from "./imgaes/twitter.png"
import whatsApp from "./imgaes/whatsApp.png"
import man from "./imgaes/man.png"

const Home = () => {
  return (
    <div className={styles.container}>
        <img src={shape} className={styles.Shape}/>
        <span className={styles.Shape2}></span>

        <div className={styles.icons}>
          <img src={facebook}/>
          <img src={instagram} />
          <img src={twitter} />
          <img src={whatsApp} />
        </div>


          <span className={styles.Address}>
          Arlington Heights, IL
          </span>
          <span className={styles.Title}>
          less is more.
          </span>
          <span className={styles.Button}>
          Read More
          </span>
          <span className={styles.Body_Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices fi......
           {/* erat, eget laoreet justo elementum et. Integer id nisl nibh. Fusce lacinia iaculis tortor et fringilla. */}
          </span>
         

          <ul className={styles.Nav}>
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>STORE</li>
            <li>ABOUT US</li>
          </ul>

          <img src={man}  className={styles.man}/>
    </div>
  )
}

export default Home
