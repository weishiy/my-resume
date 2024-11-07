import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="Certificate">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
          <img
            src={getImageUrl("certificate/aws.png")}
            alt="aws ccl"
            className={styles.certificateImage}
          />
        </div>
        <ul className={styles.CertificateItems} style={{ listStyleType: 'none' }}>
          <li className={styles.CertificateItem}>
            <div className={styles.CertificateItemText}>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>
              Amazon Web Services (AWS)
              Issued Feb 2024
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};