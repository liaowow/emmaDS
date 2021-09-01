import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: "Default Theme", props: { theme: defaultTheme, default: true } },
      { name: "Dark Theme", props: { theme: darkTheme } }
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
    }
  }
]