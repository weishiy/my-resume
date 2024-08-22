import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/myIcon_3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
              I’m a Software Developer with a focus on building reliable, high-quality applications. My skills in Java, Python, and React are complemented by my experience in testing and quality assurance, ensuring that the software I develop meets the highest standards of performance and reliability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Developer</h3>
              <p>
              I’m a Cloud Developer with hands-on experience in AWS, Docker, and cloud-based application deployment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              I have a strong background in Data Science, with experience in Python, SQL, and building predictive models.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>And more...</h3>
              <p>
              I'm also open to exploring other roles related to my core skills. Whether it’s in DevOps, machine learning, cloud architecture, or any other related field, I’m adaptable and excited to contribute wherever I can make an impact.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};