import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 2.5% 5%;
    
		@media screen and (max-width: 800px) {
			padding: 5px;
		}
  }

  * {
    box-sizing: border-box;
  }
`;

