import { useGameContext } from '../context/GameContext'
import { ClickButton } from '../components/ClickButton'
import { ScoreBoard } from '../components/ScoreBoard'
import { Timer } from '../components/Timer'

export default function GamePage() {
  const { status, count, timeLeft, highScore, start, click, reset } = useGameContext()

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 flex flex-col items-center gap-8 w-full max-w-sm shadow-xl">
        <h1 className="text-3xl font-bold text-white tracking-tight">Click Rush</h1>

        <ScoreBoard score={count} highScore={highScore} />

        <Timer timeLeft={timeLeft} status={status} />

        <ClickButton onClick={click} disabled={status !== 'playing'} />

        {status === 'finished' && (
          <p className="text-slate-300 text-center">
            {count > highScore
              ? '🏆 New high score!'
              : count === highScore
                ? 'Matched your best!'
                : `Your best is ${highScore}`}
          </p>
        )}

        <div className="flex gap-3">
          {status !== 'playing' && (
            <button
              onClick={start}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {status === 'idle' ? 'Start' : 'Restart'}
            </button>
          )}
          {status !== 'idle' && (
            <button
              onClick={reset}
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
