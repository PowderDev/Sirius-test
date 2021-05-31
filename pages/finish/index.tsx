import styled from '@emotion/styled'
import React from 'react'

export default function Finish() {
  return (
    <Container>
      <TopBlock>
        <SiriusLogo src="/Sirius_logo.png" alt="Sirius logo"/>
      </TopBlock>

      <FinishBlock>
        <img src="/finish.png" alt="Finish" />
        <h1>Отличная работа!</h1>  
      </FinishBlock> 

    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #F7F9FF;
`

const TopBlock = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const SiriusLogo = styled.img`
  margin-left: -15rem;
  width: 250.75px;
  height: 85.71px;
`
const FinishBlock = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    color: #2B3172;
  }
`

