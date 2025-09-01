import styles from './DesktopNavBar.module.scss';
import { Link } from 'react-scroll';
import globalContext from '../../hooks/globalContext';
import { useContext } from 'react';

export default function DesktopNavBar() {
  const { navBarCurrentSection } = useContext(globalContext);

  return (
    <div className={styles.desktopNavBar}>
      <div className={styles.desktopNavBarContainer}>
        <ul className={styles.desktopNavBarList}>
          <Link
            to="openView"
            smooth={true}
            duration={450}
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'home' ? '#b91c5f' : '',
              }}
            >
              HOME
            </li>
          </Link>
          <Link
            to="aboutSection"
            smooth={true}
            duration={450}
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'about' ? '#b91c5f' : '',
              }}
            >
              ABOUT
            </li>
          </Link>
          <Link
            to="projectsSection"
            smooth={true}
            duration={450}
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'projects' ? '#b91c5f' : '',
              }}
            >
              PROJECTS
            </li>
          </Link>
          <Link
            to="experienceSection"
            smooth={true}
            duration={450}
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'experience' ? '#b91c5f' : '',
              }}
            >
              EXPERIENCE
            </li>
          </Link>
          <Link
            to="contactSection"
            smooth={true}
            duration={450}
            style={{ display: 'inline' }}
          >
            <li
              className={styles.desktopNavBarListItem}
              style={{
                color: navBarCurrentSection === 'contact' ? '#b91c5f' : '',
              }}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.desktopNavBarFooter}></div>
    </div>
  );
}
