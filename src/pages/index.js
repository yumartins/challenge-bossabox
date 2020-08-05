import { useState } from 'react';

import Link from 'next/link';

import Logo from '../assets/svgs/logo.svg';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import { Head, View } from '../styles/pages/home';

const Home = () => {
  const [checked, onChecked] = useState(false);

  return (
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
          label="Hello"
          required
          placeholder="search..."
        />

        <Checkbox
          name="tags"
          label="Search in tags only"
          checked={checked}
          onChecked={onChecked}
        />
      </Head>
    </View>
  );
};

export default Home;
