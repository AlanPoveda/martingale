import styled from 'styled-components';

const InputValue = styled.input`
    
`


export default function InputQtdEntradas(){
    return(
        <div>
            <InputValue placeholder="Quantidade Entradas" type="number"></InputValue>
        </div>
    )
}