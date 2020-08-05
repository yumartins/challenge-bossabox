import { useState } from 'react';

import Link from 'next/link';

import IconPlus from '../assets/svgs/icon-plus.svg';
import Logo from '../assets/svgs/logo.svg';
import Button from '../components/Button';
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
          placeholder="search..."
          hasSearch
        />

        <Checkbox
          name="tags"
          label="Search in tags only"
          checked={checked}
          onChecked={onChecked}
        />

        <Button
          icon={<IconPlus />}
          size="md"
          label="Add"
          appearance="primary"
        />
      </Head>
    </View>
  );
};

export default Home;
