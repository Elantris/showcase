import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Button: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
    isActive?: boolean
  }
> = ({ className, children, isActive, ...props }) => {
  return (
    <button
      className={twMerge(
        'inline-flex h-8 cursor-pointer items-center gap-2 rounded border border-zinc-500 px-2 transition-all hover:border-violet-500 hover:text-violet-300',
        isActive && 'border-violet-500 text-violet-300',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
