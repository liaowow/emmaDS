import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { SignUpModal } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import "./styles.css";
import FadeIn from './FadeIn';
import EmojiCarousel from './EmojiCarousel';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <FadeIn />
      <EmojiCarousel />
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <div style={{
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div>
        <PrimaryButton modifiers={["small", "warning"]}>Warning!</PrimaryButton>
        <SecondaryButton modifiers={["large", "success"]}>Success!</SecondaryButton>
        <TertiaryButton modifiers={["large", "error"]}>Error!</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));