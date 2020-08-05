import { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { bool, string, oneOfType } from 'prop-types';

import IconSearch from '../../assets/svgs/icon-search.svg';
import { View, Error, Wrapper } from './styles';

export const Input = ({
  name,
  label,
  required,
  textarea,
  ...rest
}) => {
  const ref = useRef(null);

  const {
    error,
    fieldName,
    clearError,
    defaultValue,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <View error={error}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <Wrapper>
        {! textarea
          ? (
            <input
              {...rest}
              id={fieldName}
              ref={ref}
              onFocus={clearError}
              defaultValue={defaultValue}
            />
          ) : (
            <textarea
              {...rest}
              id={fieldName}
              ref={ref}
              rows={4}
              onFocus={clearError}
              defaultValue={defaultValue}
            />
          )}
      </Wrapper>

      {error && <Error>{error}</Error>}
    </View>
  );
};

export const SearchInput = ({
  name,
  label,
  ...rest
}) => (
  <View>
    {label && <label htmlFor={name}>{label}</label>}

    <Wrapper hasSearch>
      <IconSearch />

      <input
        {...rest}
        id={name}
      />
    </Wrapper>
  </View>
);

Input.propTypes = {
  name: string.isRequired,
  label: oneOfType([bool, string]),
  required: bool,
};

Input.defaultProps = {
  label: false,
  required: false,
};

SearchInput.propTypes = {
  name: string,
  label: oneOfType([bool, string]),
};

SearchInput.defaultProps = {
  name: '',
  label: false,
};
