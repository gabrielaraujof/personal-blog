import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

const GlobalStyles = createGlobalStyle`

${normalize}

html {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
}
`

export default GlobalStyles
