import GithubCorner from "../src/components/GithubCorner";
import styled from "styled-components";

import HeaderP from "../src/components/HeaderP";

import InputBanca from "../src/components/Inputs/InputBanca";
import InputObjetive from "../src/components/Inputs/InputObjetive";
import InputPayout from "../src/components/Inputs/InputPayout";
import InputQtdEntradas from "../src/components/Inputs/InputQtdEntradas";

import ValueMartingale from "../src/components/ValueMartingale";
import ButtonLose from "../src/components/ButtonLose";
import ButtonWin from "../src/components/ButtonWin";

const Conteudo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
`;
const Values = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
`

function MyApp() {
  return (
    <>
      <HeaderP />
      <Conteudo>
        <Dados>
          <InputBanca />
          <InputObjetive />
          <InputPayout />
          <InputQtdEntradas />
        </Dados>
        <Values>
          <ValueMartingale />
          <Buttons> 
            <ButtonLose />
            <ButtonWin />
          </Buttons>
        </Values>
      </Conteudo>
    </>
  );
}

export default MyApp;
