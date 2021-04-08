import styled, { createGlobalStyle } from "styled-components";

import HeaderP from "../src/components/HeaderP";

import InputBanca from "../src/components/Inputs/InputBanca";
import InputObjetive from "../src/components/Inputs/InputObjetive";
import InputPayout from "../src/components/Inputs/InputPayout";
import InputQtdEntradas from "../src/components/Inputs/InputQtdEntradas";

import ValueMartingale from "../src/components/ValueMartingale";
import ButtonLose from "../src/components/ButtonLose";
import ButtonWin from "../src/components/ButtonWin";

const Globalstyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: #f5f5f5;

  }
`;

const BackgroundImage = styled.div`
  background-image: url("https://s29755.pcdn.co/wp-content/uploads/2019/02/bullvsbear-1.jpg");
  background-size: cover;
  height: 100vh;
`;

function MyApp() {
  return (
    <BackgroundImage>
      
        <HeaderP />
      

      <div style={{
        display: "flex",
        justifyContent: "space-around"
      }}>
        <div>
          <InputBanca />
          <InputObjetive />
          <InputPayout />
          <InputQtdEntradas />
        </div>
        <div>
          <ValueMartingale />
          <ButtonLose />
          <ButtonWin />
        </div>
      </div>

      <Globalstyle />
    </BackgroundImage>
  );
}

export default MyApp;
