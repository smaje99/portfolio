import { Layout } from '@/components/Layout';
import { NextPageWithLayout } from '@/types/next';

const Home: NextPageWithLayout = () => {
  return (
    <main>

    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
