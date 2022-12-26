import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default
  },
  {
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default
  },
  {
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default
  },
];

function Feature({Svg}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">

      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
