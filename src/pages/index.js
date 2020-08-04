import Link from 'next/link';

import Logo from '../assets/svgs/logo.svg';
import Layout from '../layouts/Layout';

const Home = () => (
  <Layout>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  </Layout>
);

export default Home;
