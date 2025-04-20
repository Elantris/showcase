import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Panel: FC<{
  title?: ReactNode
  className?: string
  children?: ReactNode
}> = ({ title, className, children }) => {
  return (
    <div className={twMerge('space-y-4 rounded-lg bg-zinc-700 p-4', className)}>
      {title && (
        <h1 className={twMerge('border-b border-zinc-500 text-2xl font-bold text-violet-300', className)}>{title}</h1>
      )}
      {children}
    </div>
  )
}

export default Panel
