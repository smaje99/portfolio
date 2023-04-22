import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import { AnimatedText } from '@/components/AnimatedText';
import Stat from '../Stat';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <AnimatedText className={styles.title}>Passion Fules Purpose!</AnimatedText>
      <h2 className={styles.biography}>Biography</h2>
      <article className={styles.abstract}>
        <p className={styles.text}>
          <Balancer>
            Hi, I&apos;m <strong>CodeBucks</strong>, a web developer and UI/UX designer
            with a passion for creating beautiful, functional, and user-centered digital
            experiences. With 4 years of experience in the field. I am always looking for
            new and innovative ways to bring my clients&apos; visions to life.
          </Balancer>
        </p>
        <p className={styles.text}>
          <Balancer>
            I believe that design is about more than just making things look pretty -
            it&apos;s about solving problems and creating intuitive, enjoyable experiences
            for users.
          </Balancer>
        </p>
        <p className={styles.text}>
          <Balancer>
            Whether I&apos;m working on a website, mobile app, or other digital product, I
            bring my commitment to design excellence and user-centered thinking to every
            project I work on. I look forward to the opportunity to bring my skills and
            passion to your next project.
          </Balancer>
        </p>
      </article>
      <section className={styles.frame}>
        <Image
          src='/images/profile/sergio maje.webp'
          alt='Sergio Majé picture'
          className={styles.picture}
          width={300}
          height={380}
          priority
        />
      </section>
      <aside className={styles.stats}>
        <Stat stat={2} isMajor message='satisfied clients' />
        <Stat stat={4} isMajor message='projects completed' />
        <Stat stat={1} isMajor message='years of experience' />
      </aside>
    </section>
  );
};

export default Profile;
