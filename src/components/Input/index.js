import styled from 'styled-components';

const InputValue = styled.input`
    padding: 15px;
    margin-bottom: 15px;
    width: 50%;
    text-align: center;
`


export default function Inputs(){
    return(
        <>
            <InputValue placeholder="Coloque o valor" type="number"></InputValue>
        </>
    )
}