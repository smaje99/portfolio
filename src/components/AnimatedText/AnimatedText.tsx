import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import Balancer from 'react-wrap-balancer';

import styles from './AnimatedText.module.scss';

type Props = {
  className?: string;
} & PropsWithChildren;

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

const AnimatedText: FC<Props> = ({ className, children }) => {
  return (
    <motion.h1
      className={`${styles.text} ${className ?? ''}`}
      variants={quote}
      initial='initial'
      animate='animate'
    >
      <Balancer>
        {children
          ?.toString()
          .split(' ')
          .map((word, idx) => (
            <motion.span
              key={`${word} - ${idx}`}
              className={styles.word}
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))}
      </Balancer>
    </motion.h1>
  );
};

export default AnimatedText;
