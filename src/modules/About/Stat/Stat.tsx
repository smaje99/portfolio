import { AnimatedNumbers } from '@/components/AnimatedNumbers';
import styles from './Stat.module.scss';

type Props = {
  readonly stat: number;
  readonly message: string;
  readonly isMajor: boolean;
};

const Stat: React.FC<Props> = ({ stat, message, isMajor = false }) => {
  return (
    <section className={styles.stat}>
      <span className={styles.number}>
        <AnimatedNumbers value={stat} />
        {isMajor ? '+' : ''}
      </span>
      <span className={styles.message}>{message}</span>
    </section>
  );
};

export default Stat;
