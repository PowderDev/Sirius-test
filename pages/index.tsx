import Head from 'next/head'
import styled from '@emotion/styled'
import { useState } from 'react'
import { Game } from '../components/Game'

const DefaultState = {
  wordsCount: 6,
  symbolsInWord: 7,
  startDist: 15,
  increasedDist: 15,
  seconds: 1
}

export default function Home() {
  const [wordsCount, setWordsCount] = useState(DefaultState.wordsCount)
  const [symbolsInWord, setSymbolsInWord] = useState(DefaultState.symbolsInWord)
  const [startDist, setStartDist] = useState(DefaultState.startDist)
  const [increasedDist, setIncreasedDist] = useState(DefaultState.increasedDist)
  const [seconds, setSeconds] = useState(DefaultState.seconds)
  const [isStarted, setIsStarted] = useState(false)


  if (isStarted) {
    return (
      <Game wordsCount={wordsCount} symbolsInWord = {symbolsInWord} startDist={startDist} increasedDist={increasedDist} seconds={seconds} />
    )
  }

  return (
    <Container>
      <Head>
        <title>Sirius</title>
        <meta name="description" content="Created by Makarov Timyr @PowderDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBlock>
        <Name>Тренажер «Поле зрения»</Name>
        <SiriusLogo src="/Sirius_logo.png" alt="Sirius logo"/>
      </TopBlock>

      <CenterBlock>

        <ControllerRangeBlock>
          <h3>Сколько слов</h3>
          <div>
            <span>1</span> <span>2</span> <span>3</span> <span>4</span> 
            <span>5</span> <span>6</span> <span>7</span>
            <span>8</span> <span>9</span> <span>10</span>
          </div>
          <input type="range" min='1' max='10' value={wordsCount} onChange={e => setWordsCount(parseInt(e.target.value))}/>
        </ControllerRangeBlock>
        
        <ControllerRangeBlock>
          <h3>Стартовое расстояние</h3>
          <div>
            <span>5</span> <span>10</span> <span>15</span> <span>20</span> 
            <span>25</span> <span>30</span> <span>35</span>
            <span>40</span>
          </div>
          <input type="range" min='5' max='40' step='5' value={startDist} onChange={e => setStartDist(parseInt(e.target.value))}/>
        </ControllerRangeBlock>

        <ControllerRangeBlock>
          <h3>Сколько букв в словах</h3>
          <div>
            <span>3</span> <span>4</span> <span>5</span> <span>6</span> 
            <span>7</span> <span>8</span> <span>9</span>
            <span>10</span> <span>11</span> <span>12</span>
          </div>
          <input type="range" min='3' max='12' value={symbolsInWord} onChange={e => setSymbolsInWord(parseInt(e.target.value))}/>
        </ControllerRangeBlock>

        <ControllerRangeBlock>
          <h3>Увеличение расстояния</h3>
          <div>
            <span>5</span> <span>10</span> <span>15</span> <span>20</span> 
            <span>25</span> <span>30</span> <span>35</span>
            <span>40</span>
          </div>
          <input type="range" min='5' step='5' max='40' value={increasedDist} onChange={e => setIncreasedDist(parseInt(e.target.value))}/>
        </ControllerRangeBlock>

        <ControllerNumBlock>
          <div className='speed-block'> 
            Скорость <input type="number" min='1' max='5' step='.5' value={seconds} onChange={e => {
              if (parseInt(e.target.value) > 5 ) {
                setSeconds(5)
                return
              } 
              setSeconds(parseInt(e.target.value))
            }} /> сек.
          </div>
          <div className='btns-block'> 
            <button className='minus' onClick={e => setSeconds(seconds > 1 ? seconds - 0.5: seconds)}>-</button>
            <button className='plus' onClick={e => setSeconds(seconds < 5 ? seconds + 0.5: seconds)}>+</button>
          </div>
        </ControllerNumBlock>

        <StartBlock>
          <StartButton onClick={e => setIsStarted(true)} >Старт</StartButton>
        </StartBlock>

      </CenterBlock>

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
  justify-content: center;
`

const Name = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  line-height: 60px;
  color: #2B3172;
  margin: 0 auto;
`

const ControllerBlock = styled.div` 
  width: 450px;
  height: 160px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const ControllerRangeBlock = styled(ControllerBlock)`
  & h3 {
    color: #371548;
    font-size: 25px;
    margin: 7px 0;
  }

  & div {
    width: 250px;
    height: 30px;
  }

  & input {
    width: 260px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
  }

  & div span {
    height: 20px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const ControllerNumBlock = styled(ControllerBlock)`
  & .speed-block {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: #371548;
    font-weight: bold;
  }

  & .speed-block input {
    margin: 0 8px;
    font-size: 1.2rem;
  }

  & .btns-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
  }

  & .btns-block button {
    width: 40px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
`

const StartBlock = styled.div`
  width: 520px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StartButton = styled.button`
  background: #FDD207;
  border-radius: 81.5275px;
  width: 220px;
  height: 90px;
  color: #371548;
  font-weight: 700;
  font-size: 30px;
`

const SiriusLogo = styled.img`
  margin-left: -15rem;
  width: 250.75px;
  height: 85.71px;
`
const CenterBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  width: 1100px;
  height: 600px;
`

