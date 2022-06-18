import React from 'react'
import styles from "./Home.module.css"
// images
import shape from "./imgaes/shape.png"
import facebook from "./imgaes/facebook.png"
import instagram from "./imgaes/instagram.png"
import twitter from "./imgaes/twitter.png"
import whatsApp from "./imgaes/whatsApp.png"
import man from "./imgaes/man.png"
import logo from "./imgaes/logo.png"

const Home = () => {
  return (
    <div className={styles.container}>
        <a href='#'><img src={logo} className={styles.logo}/></a>

        <a href='#'><img src={shape} className={styles.Shape}/></a>
        <span className={styles.Shape2}></span>

        <div className={styles.icons}>
        <a href='#'><img src={facebook}/></a>
        <a href='#'><img src={instagram} /></a>
        <a href='#'><img src={twitter} /></a>
        <a href='#'><img src={whatsApp} /></a>
        </div>


          <span className={styles.Address}>
          Arlington Heights, IL
          </span>
          <span className={styles.Title}>
          less is more.
          </span>
          <span className={styles.Body_Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices fi......
           {/* erat, eget laoreet justo elementum et. Integer id nisl nibh. Fusce lacinia iaculis tortor et fringilla. */}
          </span>
          <span className={styles.Button}>
          <a href='#'>Read More</a>
          </span>
         

          <ul className={styles.Nav}>
            <li><a href='#'>HOME</a></li>
            <li><a href='#'>PRODUCT</a></li>
            <li><a href='#'>STORE</a></li>
            <li><a href='#'>ABOUT US</a></li>
          </ul>

          <img src={man}  className={styles.man}/>
    </div>
  )
}

export default Home
