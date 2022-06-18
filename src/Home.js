import React from 'react'
import styles from "./Home.module.css"
import icon from "./imgaes/shape.png"

const Home = () => {
  return (
    <div className={styles.container}>
        <img src={icon} className={styles.Shape}/>
        <span className={styles.Shape2}></span>
    </div>
  )
}

export default Home
