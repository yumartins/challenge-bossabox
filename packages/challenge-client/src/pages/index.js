import { useState } from 'react';

import { Form } from '@unform/web';
import Link from 'next/link';
import {
  array,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

import IconCloseModal from '../assets/svgs/icon-close-modal.svg';
import IconError from '../assets/svgs/icon-error.svg';
import IconPlus from '../assets/svgs/icon-plus.svg';
import Logo from '../assets/svgs/logo.svg';
import Button from '../components/Button';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import { Input, SearchInput } from '../components/Input';
import useFetch from '../hooks/useFetch';
import Modal from '../layouts/Modal';
import api from '../services/api';
import {
  Body,
  Head,
  View,
} from '../styles/pages/home';

export const getStaticProps = async () => {
  const { data } = await api.get('/');

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  const [modal, onModal] = useState(false);
  const [checked, onChecked] = useState(false);

  const response = useFetch('/', data);

  const { tools } = response.data;

  const inputs = [
    {
      name: 'name',
      label: 'Tool name',
      required: true,
      placeholder: 'Enter the name of the tool',
    },
    {
      name: 'link',
      label: 'Tool link',
      required: true,
      placeholder: 'Enter the link of the tool',
    },
    {
      name: 'description',
      label: 'Tool description',
      textarea: true,
      placeholder: 'Enter the description of the tool',
    },
    {
      name: 'tags',
      label: 'Tags',
      placeholder: 'Enter tags separated by space',
    },
  ];

  return (
    <View>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <h1>Very useful tools to remember</h1>

      <Head>
        <SearchInput
          name="search"
          placeholder="search..."
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
          onClick={() => onModal(! modal)}
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

      <Modal
        show={modal}
        onShow={onModal}
      >
        <Form>
          {inputs.map((item) => (
            <Input
              {...item}
              key={item.name}
            />
          ))}

          <Button
            submit
            size="md"
            label="Add tool"
            appearance="primary"
          />
        </Form>
      </Modal>
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
