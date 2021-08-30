import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

/*
 ** Exercise 2: useToggle
 ** In this exercise you'll transition between two emojis: sad and happy
 ** You should have a happy state which will be a boolean denoting whether or not the emoji should
 ** be happy or sad.
 ** The emojis should transition from opacity: 0 to opacity: 1
 ** The button text should change depending upon the happy state: "Make sad" if currently happy and "Make happy" if currently sad
 */

const EmojiCarousel = () => {
  // Add happy state here

  // Add transition here

  return (
    <div className="emoji-carousel">
      <button>Make happy</button>
      {/* Refactor this and add transitions */}
      <span role="img" aria-label="Happy">
        😀
      </span>
      <span role="img" aria-label="Sad">
        😭
      </span>
    </div>
  );
};

export default EmojiCarousel;
