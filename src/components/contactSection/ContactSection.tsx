import { useRef, useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import useVisible from '../../hooks/useVisible';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';

const DURATION_TIME: number = 0.5;

const EMAIL_JS_PUBLIC_KEY = '4XXsi1j6DfylLcIYb';
const EMAIL_JS_SERVICE_ID = 'service_l1jf209';
const EMAIL_JS_SERVICE_TEMPLATE_ID = 'template_0vlbk2d';

interface EmailState {
  success?: string;
  error?: string;
}

export default function ContactSection() {
  useEffect(() => emailjs.init(EMAIL_JS_PUBLIC_KEY), []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50% 0px' });

  useVisible({ reference: ref, navBarSection: 'contact' });

  const [emailState, setEmailState] = useState<EmailState>({
    success: undefined,
    error: undefined,
  });

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (emailState.success === '' && emailState.error === '') {
      return;
    }

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const templateParams = {
      name: formElements.name.value,
      subject: formElements.subject.value,
      message: formElements.message.value,
    };

    setEmailState({
      success: '',
      error: '',
    });

    emailjs
      .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_SERVICE_TEMPLATE_ID, templateParams)
      .then(
        (response) => {
          setEmailState((prevState) => ({
            ...prevState,
            success: response.text,
          }));
          form.reset();
        },
        (err) => {
          setEmailState((prevState) => ({
            ...prevState,
            error: err.text,
          }));
          form.reset();
        }
      );
  }

  return (
    <Element name="contactSection" className={styles.background}>
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
          contact
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
        <motion.p
          variants={{
            hidden: { scale: 0 },
            show: {
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.45,
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
          className={styles.formTitle}
        >
          Have a question or want to work together?
        </motion.p>
        {emailState.success && (
          <p className={styles.successMessage}>Success. The email was sent.</p>
        )}
        {emailState.error && (
          <>
            <p className={styles.errorMessage}>
              Error. There was an unexpected problem.
            </p>
            <p className={styles.errorMessage}>{emailState.error}</p>
          </>
        )}
        <motion.form
          onSubmit={handleFormSubmit}
          variants={{
            hidden: { scale: 0 },
            show: {
              scale: 1,
              transition: {
                type: 'spring',
                bounce: 0.45,
                duration: DURATION_TIME,
                delay: DURATION_TIME * 2,
              },
            },
          }}
          autoComplete="off"
          className={styles.form}
        >
          <input type="text" id="name" required placeholder="Name" />
          <input type="text" id="subject" required placeholder="Subject" />
          <textarea
            id="message"
            placeholder="Enter Your Message Here"
          ></textarea>
          <button type="submit" className={styles.formSubmit}>
            {emailState.success === '' && emailState.error === '' ? (
              <div className={styles.loader}></div>
            ) : (
              'submit'
            )}
          </button>
        </motion.form>
      </motion.div>
    </Element>
  );
}
