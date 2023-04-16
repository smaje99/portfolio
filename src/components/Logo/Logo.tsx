import Link from 'next/link';

import { Routes } from '@/helpers/routes';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <section className={styles.logo}>
      <Link href={Routes.HOME.path} className={styles.brand} scroll={true}>
        Sergio Majé
      </Link>
    </section>
  );
};

export default Logo;
