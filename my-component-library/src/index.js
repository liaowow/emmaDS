import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <>
    <GlobalStyle />
    <PrimaryButton>Hello Emma 1!</PrimaryButton>
    <SecondaryButton>Hello Emma 2!</SecondaryButton>
    <TertiaryButton>Hello Emma 3!</TertiaryButton>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));