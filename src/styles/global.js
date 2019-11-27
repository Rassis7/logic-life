import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: GameOver;
    src: url(/fonts/game_over/game_over.ttf);
  }
  body {
    font-family: GameOver;  
  }
`;