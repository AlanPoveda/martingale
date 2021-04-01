import styled from 'styled-components';

const InputValue = styled.input`
    padding: 15px;
    margin-bottom: 15px;
    width: 20%;
    text-align: center;
`


export default function InputQtdEntradas(){
    return(
        <>
            <InputValue placeholder="Quantidade Entradas" type="number"></InputValue>
        </>
    )
}