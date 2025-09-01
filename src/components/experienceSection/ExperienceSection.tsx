import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import ExperienceGallery from './ExperienceGallery';
import styles from './ExperienceSection.module.scss';
import useVisible from '../../hooks/useVisible';
import { Element } from 'react-scroll';

const DURATION_TIME: number = 0.5;

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'experience' });

  return (
    <Element name="experienceSection">
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        ref={ref}
        className={styles.container}
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
          Experience
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
        <ExperienceGallery isInView={isInView} />
      </motion.div>
    </Element>
  );
}
