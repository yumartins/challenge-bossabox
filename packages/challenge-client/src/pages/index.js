import { useState } from 'react';

import Link from 'next/link';
import {
  object,
  number,
  string,
  objectOf,
  oneOfType,
} from 'prop-types';

import IconPlus from '../assets/svgs/icon-plus.svg';
import Logo from '../assets/svgs/logo.svg';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import useFetch from '../hooks/useFetch';
import api from '../services/api';
import { Head, View } from '../styles/pages/home';

export const getStaticProps = async () => {
  const { data } = await api.get('/api');

  return {
    props: {
      res: data,
    },
  };
};

const Home = ({ res }) => {
  const [checked, onChecked] = useState(false);

  const { data } = useFetch('/api', res);

  console.log(data);

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

Home.propTypes = {
  res: objectOf(oneOfType(([
    object, number, string,
  ]))),
};

Home.defaultProps = {
  res: {},
};

export default Home;
