import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <>
    <GlobalStyle />
    <div>
      <PrimaryButton>Hello Emma 1!</PrimaryButton>
      <SecondaryButton>Hello Emma 2!</SecondaryButton>
      <TertiaryButton>Hello Emma 3!</TertiaryButton>
    </div>
    <div>
      <PrimaryButton modifiers={["small", "warning"]}>Warning!</PrimaryButton>
      <SecondaryButton modifiers={["large", "success"]}>Success!</SecondaryButton>
      <TertiaryButton modifiers={["large", "error"]}>Error!</TertiaryButton>
    </div>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));