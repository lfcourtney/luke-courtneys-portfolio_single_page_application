import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './ProjectsSection.module.scss';
import ProjectGallery from './ProjectGallery';
import useVisible from '../../hooks/useVisible';
import { Element } from 'react-scroll';

const DURATION_TIME: number = 0.5;

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'projects' });

  return (
    <Element name="projectsSection" className={styles.background}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        ref={ref}
        className={styles.container}
      >
        <motion.h1
          variants={{
            hidden: { x: 250, opacity: 0 },
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
          Projects
        </motion.h1>
        <motion.div
          variants={{
            hidden: { x: '300%', opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { type: 'spring', duration: DURATION_TIME },
            },
          }}
          className={styles.underline}
        ></motion.div>
        <ProjectGallery isInView={isInView} />
      </motion.div>
    </Element>
  );
}
