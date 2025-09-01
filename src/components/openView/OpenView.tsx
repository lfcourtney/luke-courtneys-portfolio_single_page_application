import React from 'react';
import { useRef } from 'react';
import styles from './OpenView.module.scss';
import { Link, Element } from 'react-scroll';
import useVisible from '../../hooks/useVisible';

const OpenView = (): React.JSX.Element => {
  const ref = useRef(null);
  useVisible({ reference: ref, navBarSection: 'home' });

  return (
    <Element className={styles.container} name="openView">
      <div ref={ref} className={styles.containerChild}>
        <h1 className={styles.header}>Luke Courtney</h1>
        <hr className={styles.horizontalRule} />
        <h2 className={styles.subHeader}>Portfolio</h2>
        <Link
          to="aboutSection"
          smooth={true}
          duration={450}
          style={{ display: 'inline' }}
        >
          <i
            className={['fas', 'fa-chevron-down', styles.chevronDown].join(' ')}
          ></i>
        </Link>
      </div>
    </Element>
  );
};

export default OpenView;
