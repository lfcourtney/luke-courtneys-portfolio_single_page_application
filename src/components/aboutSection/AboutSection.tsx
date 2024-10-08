import styles from './AboutSection.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import useVisible from '../../hooks/useVisible';

const DURATION_TIME: number = 0.5;

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'about' });

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={styles.container}
      ref={ref}
      id="aboutSection"
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
            I am a final-year BSc Computer Science student at Aston University
            with industry experience. During my placement year, I served as a
            Placement Developer at Royal HaskoningDHV, where I was part of the
            Witness team, focused on delivering predictive simulation and
            optimization technology. In this role, I gained valuable experience
            working within a Scrum team, contributing to various stages of the
            Agile development process, including planning, analysis, design,
            coding, unit testing and acceptance testing.
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
  );
}
