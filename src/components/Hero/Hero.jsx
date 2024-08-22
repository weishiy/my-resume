import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shiyan</h1>
        <p className={styles.description}>
        I'm a recent graduate from Victoria University of Wellington, with a major in Computer Science and a minor in Data Science. I have experience in Java, Python, R, SQL,and AWS, and I'm currently learning React and Node.Js. Reach out to learn more!
        </p>
        <a href="shiyan3114@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/icon.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};