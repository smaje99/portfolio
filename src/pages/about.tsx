import { Layout } from '@/components/Layout';
import { NextPageWithLayout } from '@/types/next';

import { styles } from '@/modules/Home';

const Home: NextPageWithLayout = () => {
  return (
    <main className={styles.main}>
      About
    </main>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
