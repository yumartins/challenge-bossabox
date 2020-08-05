import { useState } from 'react';

import Link from 'next/link';
import {
  array,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

import IconError from '../assets/svgs/icon-error.svg';
import IconPlus from '../assets/svgs/icon-plus.svg';
import Logo from '../assets/svgs/logo.svg';
import Button from '../components/Button';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import useFetch from '../hooks/useFetch';
import api from '../services/api';
import { Head, View, Body } from '../styles/pages/home';

export const getStaticProps = async () => {
  const { data } = await api.get('/');

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  const [checked, onChecked] = useState(false);

  const response = useFetch('/', data);

  const { tools } = response.data;

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

      <Body>
        {tools?.map(({
          id,
          tags,
          title,
          description,
        }) => (
          <Card key={id}>
            <div>
              <h4>{title}</h4>
              <Button
                icon={<IconError />}
                size="sm"
                label="Remove"
                appearance="danger"
              />
            </div>

            <p>{description}</p>

            <ul>
              {tags?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Body>
    </View>
  );
};

Home.propTypes = {
  data: objectOf(oneOfType(([
    object, array,
  ]))),
};

Home.defaultProps = {
  data: {},
};

export default Home;
