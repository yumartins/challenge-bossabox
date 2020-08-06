import { useRef, useState, useEffect } from 'react';

import Link from 'next/link';
import {
  shape,
  number,
  string,
  arrayOf,
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
  EmptyTools,
  DeleteModal,
} from '../styles/pages/home';

export const getStaticProps = async () => {
  const { data } = await api.get('/tools');

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  const [modal, onModal] = useState(false);
  const [query, onQuery] = useState('');
  const [checked, onChecked] = useState(false);
  const [exclude, onExclude] = useState(false);
  const [excludeIdx, onExcludeIdx] = useState(-1);

  const handleQuery = query.length && ! checked
    ? `?q=${query}`
    : query.length && checked
      ? `?tags_like=${query}`
      : '';

  const { data: tools, mutate } = useFetch(`/tools${handleQuery}`, data);

  const ref = useRef(null);

  const filtered = tools ? [].concat(...tools) : [];

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
   * Submit form add tool
   */
  const add = async (value) => {
    try {
      await Yup.object().shape({ ...schema }).validate(value, {
        abortEarly: false,
      });

      const new_tool = {
        ...value,
        tags: value.tags.split(' '),
      };

      await api.post('/tools', new_tool).then(() => {
        mutate([...tools, new_tool], false);
        onModal(! modal);
      });
    } catch (err) {
      error(err, ref);
    }
  };

  /**
   * Submit form remove tool
   */
  const remove = async (id) => {
    await api.delete(`/tools/${id}`);

    onExclude(! exclude);
    onExcludeIdx(-1);

    const removed = tools.filter((tool) => tool.id !== id);

    mutate(removed, false);
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
          name="query"
          value={query}
          onChange={({ target }) => onQuery(target.value)}
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
        {filtered?.map(({
          id,
          link,
          tags,
          title,
          description,
        }, index) => (
          <Card key={id || title}>
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
                onClick={() => {
                  onExclude(! exclude);
                  onExcludeIdx(index);
                }}
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

        {filtered.length <= 0 && (
          <EmptyTools>
            <h5>
              Sorry, did not find any
              <br />
              tools with that name
            </h5>
          </EmptyTools>
        )}
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
          onSubmit={add}
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

      {/**
       * Modal for remove tool
       */}
      <Modal
        type="remove"
        show={exclude}
        onShow={onExclude}
      >
        {excludeIdx !== -1 && (
          <DeleteModal>
            <p>{`Are you sure you want to remove "${tools[excludeIdx].title}"`}</p>

            <div>
              <Button
                size="md"
                label="Cancel"
                appearance="secondary"
                onClick={() => onExclude(! exclude)}
              />

              <Button
                size="md"
                label="Yes, remove"
                appearance="primary"
                onClick={() => remove(tools[excludeIdx].id)}
              />
            </div>
          </DeleteModal>
        )}
      </Modal>
    </View>
  );
};

Home.propTypes = {
  data: arrayOf(shape({
    id: number,
    tags: arrayOf(string),
    link: string,
    title: string,
    description: string,
  })),
};

Home.defaultProps = {
  data: [],
};

export default Home;
