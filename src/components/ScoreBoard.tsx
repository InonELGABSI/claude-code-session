interface ScoreBoardProps {
  score: number
  highScore: number
}

export function ScoreBoard({ score, highScore }: ScoreBoardProps) {
  return (
    <div className="flex gap-8 justify-center">
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
          Score
        </span>
        <span className="text-5xl font-bold tabular-nums text-white">{score}</span>
      </div>
      <div className="w-px bg-slate-700" />
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-yellow-400 uppercase tracking-widest">
          Best
        </span>
        <span className="text-5xl font-bold tabular-nums text-yellow-400">{highScore}</span>
      </div>
    </div>
  )
}
