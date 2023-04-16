import Image from 'next/image';
import { HiDocumentText } from 'react-icons/hi';

import { AnimatedText } from '@/components/AnimatedText';
import { Layout } from '@/components/Layout';
import { NextPageWithLayout } from '@/types/next';

import { styles } from '@/modules/Home';

const Home: NextPageWithLayout = () => {
  return (
    <main className={styles.main}>
      <Image
        src='/images/profile/developer-pic-1.webp'
        alt='Profile picture'
        className={styles.picture}
        width={580}
        height={580}
        priority
      />
      <section className={styles['brand-message']}>
        <AnimatedText>Turning vision into reality with code and design.</AnimatedText>
      </section>
      <p className={styles.paragraph}>
        As a skilled full-stack developer, I am dedicated to turning ideas into innovative
        web applications. Explore my latest projects and articles, showcasing my expertise
        in React.js and web development.
      </p>
      <section className={styles['resume-container']}>
        <a
          href='/docs/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={styles['resume-file']}
          aria-label='Download resume'
        >
          <HiDocumentText aria-hidden />
          Resume
        </a>
        <a
          href='mailto:smajefranco@gmail.com'
          target='_blank'
          className={styles['resume-contact']}
        >
          Contact
        </a>
      </section>
    </main>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;