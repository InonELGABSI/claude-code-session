import type { GameStatus } from '../hooks/useGame'

interface TimerProps {
  timeLeft: number
  status: GameStatus
}

export function Timer({ timeLeft, status }: TimerProps) {
  const isLow = timeLeft <= 10 && status === 'playing'

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
        Time
      </span>
      <span
        className={`text-7xl font-mono font-bold tabular-nums transition-colors duration-300 ${
          isLow ? 'text-red-400 animate-pulse' : 'text-white'
        }`}
      >
        {String(timeLeft).padStart(2, '0')}
      </span>
    </div>
  )
}
