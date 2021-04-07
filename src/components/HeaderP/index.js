import styled from 'styled-components'

const TitleHeader = styled.div`    
    display: flex;
`

export default function HeaderP(){
    return(
        <TitleHeader>
            <h1> Martingale </h1>
        </TitleHeader>
    )
}