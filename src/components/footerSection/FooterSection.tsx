import { Link } from 'react-scroll';
import styles from './FooterSection.module.scss';

export default function FooterSection() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        luke courtney © {new Date().getFullYear()}
      </p>
      <Link to="openView" style={{ display: 'inline' }}>
        <div className={styles.arrowBackground}>
          <i className={['fas', 'fa-chevron-up', styles.arrow].join(' ')}></i>
          <i className={['fas', 'fa-chevron-up', styles.arrow].join(' ')}></i>
        </div>
      </Link>
    </div>
  );
}
