import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MobileNavBar.module.scss';
import { Link } from 'react-scroll';

interface MobileNavBarProps {
  hamburgerOpen: boolean;
  hamburgerMenuComponent: React.ReactElement;
}

export default function MobileNavBar({
  hamburgerOpen,
  hamburgerMenuComponent,
}: MobileNavBarProps) {
  return (
    <div className={styles.mobileNavBar}>
      <div className={styles.mobileNavBarHamburgerContainer}>
        {hamburgerMenuComponent}
        <div className={styles.mobileNavBarFooter}></div>
      </div>
      <AnimatePresence initial={false}>
        {hamburgerOpen && (
          <motion.div
            key="mobileNavBarMenu"
            className={styles.mobileNavBarMenu}
            animate={{
              height: 225,
              transition: { duration: 0.5, type: 'spring', bounce: 0 },
            }}
            exit={{
              height: 0,
              transition: { duration: 0.5, type: 'spring', bounce: 0 },
            }}
          >
            <div className={styles.mobileNavBarMenuContainer}>
              <ul>
                <Link
                  to="openView"
                  smooth={true}
                  duration={450}
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>HOME</li>
                </Link>
                <Link
                  to="aboutSection"
                  smooth={true}
                  duration={450}
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>ABOUT</li>
                </Link>
                <Link
                  to="projectsSection"
                  smooth={true}
                  duration={450}
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>PROJECTS</li>
                </Link>
                <Link
                  to="experienceSection"
                  smooth={true}
                  duration={450}
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>EXPERIENCE</li>
                </Link>
                <Link
                  to="contactSection"
                  smooth={true}
                  duration={450}
                  style={{ display: 'inline' }}
                >
                  <li className={styles.mobileNavBarListItem}>CONTACT</li>
                </Link>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
