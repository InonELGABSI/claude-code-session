interface ClickButtonProps {
  onClick: () => void
  disabled: boolean
}

export function ClickButton({ onClick, disabled }: ClickButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-48 h-48 rounded-full text-2xl font-bold transition-all duration-100 select-none
        ${
          disabled
            ? 'bg-slate-700 text-slate-500 cursor-not-allowed scale-100'
            : 'bg-green-500 hover:bg-green-400 active:scale-95 active:bg-green-600 text-white shadow-lg shadow-green-500/30 cursor-pointer'
        }
      `}
    >
      CLICK!
    </button>
  )
}
