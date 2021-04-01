import styled from "styled-components";

import HeaderP from "../src/components/HeaderP";

import InputBanca from "../src/components/Inputs/InputBanca";
import InputObjetive from "../src/components/Inputs/InputObjetive";
import InputPayout from "../src/components/Inputs/InputPayout";
import InputQtdEntradas from "../src/components/Inputs/InputQtdEntradas";

import ValueMartingale from "../src/components/ValueMartingale";
import ButtonLose from "../src/components/ButtonLose";
import ButtonWin from "../src/components/ButtonWin";

function MyApp() {
  return (
    <div
      style={{
        backgroundImage: `url("https://s29755.pcdn.co/wp-content/uploads/2019/02/bullvsbear-1.jpg")
      `,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <HeaderP />

      <InputBanca />
      <InputObjetive />
      <InputPayout />
      <InputQtdEntradas />

      <ValueMartingale />

      <ButtonLose />
      <ButtonWin />
    </div>
  );
}

export default MyApp;
