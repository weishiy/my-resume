import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:shiyan3114@gmail.com">shiyan3114@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/weishiy/">linkedin.com/weishiy</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github-logo.png")} alt="Github icon" />
          <a href="https://github.com/weishiy">github.com/weishiy</a>
        </li>
      </ul>
    </footer>
  );
};