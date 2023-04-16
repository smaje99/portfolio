import { memo } from 'react';

import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';
import { Routes } from '@/helpers/routes';
import { SocialMedia } from '@/helpers/social-media';

import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navigation}>
        {Object.values(Routes).map(({ name, path }) => (
          <li key={name} className={styles.item}>
            <NavLink
              href={path}
              className={(active) => `${styles.link} ${active && styles.active}`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Logo />
      <ul className={styles.contact}>
        {Object.values(SocialMedia).map(({ path, description, Icon }) => (
          <li
            key={path}
            className={styles.item}
            title={description}
            aria-label={description}
          >
            <a href={path} target='_blank'>
              <Icon aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(NavBar);
