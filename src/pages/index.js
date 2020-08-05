import Link from 'next/link';

import Logo from '../assets/svgs/logo.svg';
import Input from '../components/Input';
import { Head, View } from '../styles/pages/home';

const Home = () => (
  <View>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>

    <h1>Very useful tools to remember</h1>

    <Head>
      <Input
        name="search"
        placeholder="search..."
      />
    </Head>
  </View>
);

export default Home;
