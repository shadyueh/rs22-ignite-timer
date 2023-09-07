import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
}

body {
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  background: rgb(32,178,170);
  background: linear-gradient(176deg, rgba(32,178,170,1) 0%, rgba(2,0,36,1) 13%, rgba(2,0,36,1) 64%, rgba(32,178,170,1) 100%);
  height: calc(100vh - 2px);
  width: calc(100vw - 2px);
  border: 1px solid rgb(0,218,218);
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
