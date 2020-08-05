import {
  func,
  array,
  string,
  number,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

import { GlobalStyles } from '../styles';

const App = ({ Component, pageProps }) => (
  <div id="bossabox">
    <GlobalStyles />

    <Component {...pageProps} />
  </div>
);

App.propTypes = {
  Component: func,
  pageProps: objectOf(oneOfType([
    string, number, object, array,
  ])),
};

App.defaultProps = {
  Component: () => { },
  pageProps: {},
};

export default App;
