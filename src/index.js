import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, addLocaleData } from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en.js';
import zhLocaleData from 'react-intl/locale-data/zh.js';
import jaLocaleData from 'react-intl/locale-data/ja.js';

addLocaleData([
  ...zhLocaleData,
  ...enLocaleData,
  ...jaLocaleData
])

const Root = () => {
  const locale = navigator.language;

  return (
    <IntlProvider locale={locale} key={locale} defaultLocale="en">
      <App />
    </IntlProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
