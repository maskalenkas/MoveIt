import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContexts';

/*
  * 1-
  * Falando como vai ser o corpo do que vai receber no export
*/
interface CountdownContextDate {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountDown: () => void
  resetCountDown: () => void
}


/* 
  * 2- 
  * Falando qual vai ser o tipo de objeto que vai receber no export
*/

export const CountdownContext = createContext({} as CountdownContextDate)

/*
  * 3- 
  * Colocando o children como props
*/
interface CountdownContextProps {
  children: ReactNode;
}

// Variavel global
let countdownTimeout: NodeJS.Timeout

/*
  * 4- 
  * Retornando um objeto no import, o objeto nada mais é aquele do passo 1.
*/
export function CountdownProvider({ children }: CountdownContextProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time]) // Recursividade

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
    setHasFinished(false)
  }


  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
      }}>
      {children}
    </CountdownContext.Provider>
  )
}