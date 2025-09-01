import styles from './AboutSection.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import useVisible from '../../hooks/useVisible';
import { Element } from 'react-scroll';

const DURATION_TIME: number = 0.5;

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'about' });

  return (
    <Element name="aboutSection">
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        className={styles.container}
        ref={ref}
      >
        <motion.h1
          variants={{
            hidden: { x: -250, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: DURATION_TIME,
                delay: DURATION_TIME,
              },
            },
          }}
          className={styles.header}
        >
          About
        </motion.h1>
        <motion.div
          className={styles.underline}
          variants={{
            hidden: { x: '-300%', opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { type: 'spring', duration: DURATION_TIME },
            },
          }}
        ></motion.div>
        <motion.h2
          className={styles.subHeader}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.hr
          className={styles.horizontalRule}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
        ></motion.hr>
        <motion.div
          className={styles.grid}
          variants={{
            hidden: { scale: 0 },
            show: {
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.45,
                duration: DURATION_TIME,
                delay: DURATION_TIME * 3,
              },
            },
          }}
        >
          <div className={styles.gridItem}>
            <h1>Profile</h1>
            <p>
              A First Class BSc (Hons) Computer Science graduate from Aston
              University with hands-on experience developing robust, cloud
              services within a professional Scrum workflow. Collaborative and
              self-motivated with strong stakeholder engagement skills,
              incorporating stakeholder feedback to drive continuous improvement
              as a cross-functional Scrum team member. Passionate about writing
              clean, scalable code in fast-paced, collaborative environments.
            </p>
          </div>
          <div className={styles.resumePhoto}></div>
          <div className={styles.gridItem}>
            <p className={styles.bold}>Name:</p>
            <p>Luke Courtney</p>
            <p className={styles.boldMargin}>Links:</p>
            <a
              href="https://uk.linkedin.com/in/luke-courtney-74a205221"
              target="_blank"
              rel="noopener"
              className={styles.iconLink}
            >
              <img
                src="/icons/linkedin.png"
                alt="linkedin-logo"
                className={styles.icon}
              />
            </a>
            <a
              href="https://github.com/lfcourtney"
              target="_blank"
              rel="noopener"
              className={styles.iconLink}
            >
              <img
                src="/icons/github.png"
                alt="github-logo"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.youtube.com/@lukechopper22/videos"
              target="_blank"
              rel="noopener"
              className={styles.iconLink}
            >
              <img
                src="/icons/youtube.png"
                alt="youtube-logo"
                className={styles.icon}
              />
            </a>
            <p className={styles.boldMargin}>Location:</p>
            <p>West Midlands, UK</p>
          </div>
        </motion.div>
      </motion.div>
    </Element>
  );
}
