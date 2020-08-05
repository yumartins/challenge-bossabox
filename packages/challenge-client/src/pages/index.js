import { useRef, useState } from 'react';

import Link from 'next/link';
import {
  array,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';
import * as Yup from 'yup';

import IconError from '../assets/svgs/icon-error.svg';
import IconPlus from '../assets/svgs/icon-plus.svg';
import Logo from '../assets/svgs/logo.svg';
import Button from '../components/Button';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import { Input, SearchInput } from '../components/Input';
import useFetch from '../hooks/useFetch';
import Modal from '../layouts/Modal';
import { api, error, schema } from '../services';
import {
  Body,
  Head,
  View,
  FormModal,
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

  const ref = useRef(null);

  /**
   * List inputs add modal
   */
  const inputs = [
    {
      name: 'title',
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

  /**
   * Submit form
   */
  const submit = async (data, type) => {
    const add = async () => {
      try {
        await Yup.object().shape({ ...schema }).validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        error(err, ref);
      }
    };

    const remove = () => {};

    switch (type) {
      case 'add':
        add();
        break;

      case 'remove':
        remove();
        break;

      default: break;
    }
  };

  return (
    <View>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <h1>Very useful tools to remember</h1>

      {/**
       * Actions head
       */}
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

      {/**
       * Listen cards
       */}
      <Body>
        {tools?.map(({
          id,
          link,
          tags,
          title,
          description,
        }) => (
          <Card key={id}>
            <div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <h4>{title}</h4>
              </a>

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

      {/**
       * Modal for add tool
       */}
      <Modal
        show={modal}
        onShow={onModal}
      >
        <FormModal
          ref={ref}
          onSubmit={(value) => submit(value, 'add')}
        >
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
        </FormModal>
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
