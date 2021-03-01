import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Deploy Sensors</>,
    imageUrl: "img/openeew-sensor.svg",
    description: (
      <>
        OpenEEW sensors have been designed to compete against seismometers that
        cost 60x more. 👩‍🔧
      </>
    ),
  },
  {
    title: <>Detect Earthquakes</>,
    imageUrl: "img/openeew-detection.svg",
    description: (
      <>
        Using sensor data, detect and characterize the earthquake. Balance
        accuracy with low-latency for effective alerts. 👩🏻‍💻
      </>
    ),
  },
  {
    title: <>Send Alerts</>,
    imageUrl: "img/openeew-alarm.svg",
    description: (
      <>
        Predict the shaking for nearby users, and trigger alerts for people and
        critical systems. ⚠️
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} · Earthquake early-warnings`}
      description="OpenEEW is a set of open source tools that allow anyone to create their own alerts for earthquakes."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("https://grillo.io/product/openeew-node/")}
            >
              Buy Sensor
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
