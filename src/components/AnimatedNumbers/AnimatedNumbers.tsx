import { useEffect, useRef, type FC } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  readonly value: number;
};

const AnimatedNumbers: FC<Props> = ({ value }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest: number) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

export default AnimatedNumbers;
