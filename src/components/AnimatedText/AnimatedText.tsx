import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

import styles from './AnimatedText.module.scss';

const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const AnimatedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.h1
      className={styles.text}
      variants={quote}
      initial='initial'
      animate='animate'
    >
      {children?.toString().split(' ').map((word, idx) => (
        <motion.span
          key={`${word} - ${idx}`}
          className={styles.word}
          variants={singleWord}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;