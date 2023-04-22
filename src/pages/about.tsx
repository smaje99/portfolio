import { Layout } from '@/components/Layout';
import { Profile, styles } from '@/modules/About';
import type { NextPageWithLayout } from '@/types/next';

const Home: NextPageWithLayout = () => {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout title='About'>{page}</Layout>;
};

export default Home;
