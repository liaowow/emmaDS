export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Default theme',
    values: [
      {
        name: 'Default theme',
        value: '#ffffff',
      },
      {
        name: 'Dark theme',
        value: '#050449',
      },
    ],
  }
}