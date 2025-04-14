import { FC, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useLocation } from 'wouter'

export const Layout: FC<{
  children?: ReactNode
}> = ({ children }) => {
  const [location, navigate] = useLocation()

  const items = [
    {
      key: 'loading',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Loading',
      onClick: () => navigate('/loading'),
    },
    {
      key: 'slash',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Slash Block',
      onClick: () => navigate('/slash'),
    },
    {
      key: 'infinite',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Infinite Scroll',
      onClick: () => navigate('/infinite'),
    },
  ]

  const activeItem = items.find((item) => location === `/${item.key}`)

  return (
    <div className="relative min-h-dvh w-dvw space-y-8 overflow-x-hidden text-white">
      <header className="sticky top-0 h-12 w-full bg-zinc-800">
        <button
          className="aspect-square h-full cursor-pointer bg-zinc-700 text-lg hover:bg-zinc-600"
          onClick={() => navigate('~')}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
      </header>

      <nav className="flex w-full flex-wrap items-center justify-center gap-4 px-8">
        {items.map((item) => {
          const isActive = activeItem?.key === item.key

          return (
            <div
              key={item.key}
              className={twMerge(
                'flex h-8 cursor-pointer items-center gap-2 rounded border border-zinc-500 bg-zinc-700 px-2 transition-all',
                'hover:border-violet-500 hover:bg-zinc-500',
                isActive && 'border-violet-500 bg-zinc-500',
              )}
              onClick={() => item.onClick?.()}
            >
              <div className="aspect-square shrink-0">{item.icon}</div>
              <div className="">{item.label}</div>
            </div>
          )
        })}
      </nav>

      {activeItem && <>{children}</>}
    </div>
  )
}

export const Main: FC<{
  className?: string
  children?: ReactNode
}> = ({ className, children }) => {
  return <main className={twMerge('mx-auto w-full max-w-3xl rounded-lg bg-zinc-700 p-4', className)}>{children}</main>
}

export const CodeBlock: FC<{
  children?: ReactNode
}> = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(children as string)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch {
      console.error('Failed to copy text')
    }
  }

  return (
    <div className="relative w-full overflow-y-auto rounded-lg border border-transparent bg-zinc-800 p-4 transition-all hover:border-zinc-500">
      <div className="absolute top-1 right-1 flex gap-2">
        <button
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded border border-zinc-500 hover:bg-zinc-500"
          onClick={() => handleCopy()}
        >
          {isCopied ? <i className="fa-solid fa-check text-green-500" /> : <i className="fa-solid fa-copy" />}
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  )
}
