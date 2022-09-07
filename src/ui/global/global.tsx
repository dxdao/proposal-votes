import { createGlobalStyle } from 'styled-components'

export const FixedGlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html, body, input, label, textarea, button {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Open Sans', sans-serif;
}

/** Full-width and height */
body, html, #root {
  min-height:100vh;
  width: 100%;
}

button {
  user-select: none;
}

a {
  text-decoration: none;
}

pre, code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
}

html {
  color: #000;
  background-color: #fff;
  color-scheme: 'light';
}

body {
  min-height: 100vh;
  background-repeat: no-repeat;
  margin: 0 !important;
}
`
