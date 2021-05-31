import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { cutOffExcess, elements, filterByCountOfSymbols, shuffleArray } from '../utils/functions'
import Link from 'next/link'
import { css } from '@emotion/react'

interface GameProps {
  wordsCount: number,
  symbolsInWord: number,
  startDist: number,
  increasedDist: number,
  seconds: number
}

export const Game: React.FC<GameProps> = ({ wordsCount, symbolsInWord, startDist, increasedDist, seconds }) => {
    const [currentWord, setCurrentWord] = useState<any>('')
    const [ isFinished, setIsFinished ] = useState(false)

    useEffect(() => {
      let arr = filterByCountOfSymbols(elements, symbolsInWord)
      arr = shuffleArray(arr)
      arr = cutOffExcess(arr, wordsCount)
      
      play(arr)
    }, [])

    const play = (words: Array<string>) => {
      setCurrentWord(words.pop())
      const interval = setInterval(() => {
        if (!words.length) {
          clearInterval(interval)
          setIsFinished(true)
          setCurrentWord('Игра окончена')
          return
        }

        setCurrentWord(words.pop())
      }, seconds * 1000)
    }
    
    function separateWord(word: string) {
      const mid = Math.floor(word.length / 2)
      return (
        <H1>{ word.substr(0, mid) } <Separator dist={startDist + increasedDist} >~</Separator> { word.substr(mid) } </H1>
      )
    }

    return (
      <Container>
        <TopBlock>
            <SiriusLogo src="/Sirius_logo.png" alt="Sirius logo"/>
        </TopBlock>
        <GameBlock>
            { isFinished ? <H1>{ currentWord }</H1> : separateWord(currentWord) }
            <H3>{ 
            isFinished ? 
              <Link href="/finish">
                <a>Перейти на страницу финиша</a>
              </Link> : null 
            } </H3>
        </GameBlock>
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

const GameBlock = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const H1 = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: #371548;
  display: flex;
  align-items: center;
  justify-content: center;
`
const H3 = styled.h3` 
  color: aquamarine;
  font-style: italic;
`

type Props = {
  dist: number
} 

const computeDist = (props: Props) => css`
  margin: 0 ${props.dist * 1.2}px;
`
const Separator = styled.span` 
  font-size: 70px;
  color: black;
  font-style: italic;
  ${computeDist}
`