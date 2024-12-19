import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issued: "Issued Feb 2024",
      imgSrc: getImageUrl("certificate/aws.png"),
      imgAlt: "AWS Certificate",
      url: "https://www.credly.com/badges/ecf7d202-c34b-42d0-b0bd-7ed6ba88faf2/linked_in?t=s8vcr8",
    },
    {
      title: "Microsoft Fabric Analytics Engineer Associate",
      issuer: "Microsoft",
      issued: "Issued Dec 2024",
      imgSrc: getImageUrl("certificate/ms_fabric.png"),
      imgAlt: "Microsoft Fabric Certificate",
      url: "https://learn.microsoft.com/en-nz/users/shiyanwei-7293/credentials/22805b75d6b4bf3d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
  ];

  return (
    <section className={styles.container} id="Certificate">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certItem}>
            {/* Image with clickable link */}
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imgLink}
            >
              <img
                src={cert.imgSrc}
                alt={cert.imgAlt}
                className={styles.certificateImage}
              />
            </a>
            {/* Text content with clickable title */}
            <div className={styles.textContainer}>
              <h3>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certLink}
                >
                  {cert.title}
                </a>
              </h3>
              <p>{cert.issuer}</p>
              <p>{cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
