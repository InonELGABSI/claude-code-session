import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export type GameStatus = 'idle' | 'playing' | 'finished'

const DURATION = 10

export function useGame() {
  const [highScore, setHighScore] = useLocalStorage<number>('clickrush-highscore', 0)
  const [status, setStatus] = useState<GameStatus>('idle')
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(DURATION)

  // Tick — only restarts when status changes, not on every click
  useEffect(() => {
    if (status !== 'playing') return
    const id = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [status])

  // End game when time runs out
  useEffect(() => {
    if (status !== 'playing' || timeLeft > 0) return
    setStatus('finished')
    setHighScore(Math.max(count, highScore))
  }, [status, timeLeft, count, highScore, setHighScore])

  const start = useCallback(() => {
    setCount(0)
    setTimeLeft(DURATION)
    setStatus('playing')
  }, [])

  const click = useCallback(() => {
    if (status === 'playing') setCount(c => c + 1)
  }, [status])

  const reset = useCallback(() => {
    setCount(0)
    setTimeLeft(DURATION)
    setStatus('idle')
  }, [])

  return { status, count, timeLeft, highScore, start, click, reset }
}
