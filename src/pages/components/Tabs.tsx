import { FC, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CodeBlock, Panel } from '.'

const Tabs1: FC<{
  variant?: 'default' | 'items-only'
  items: {
    key: string
    icon?: ReactNode
    label: string
    children?: ReactNode
  }[]
  defaultActiveKey?: string
  activeKey?: string
  onChange?: (key: string) => void
}> = ({ variant = 'default', items, defaultActiveKey, activeKey, onChange }) => {
  const [_activeKey, _setActiveKey] = useState(defaultActiveKey ?? items[0]?.key)
  const __activeKey = activeKey ?? _activeKey

  return (
    <div className="space-y-2">
      <div className="w-full overflow-x-scroll">
        <div className="flex w-fit items-center gap-2 whitespace-nowrap">
          {items.map((item) => {
            return (
              <button
                key={item.key}
                className={twMerge(
                  'inline-flex h-12 cursor-pointer items-center rounded-lg border-2 border-zinc-500 bg-zinc-800 px-6 transition-all hover:border-violet-500 hover:bg-zinc-700',
                  item.key === __activeKey && 'border-violet-500 bg-linear-to-b from-violet-400 to-violet-800',
                )}
                onClick={() => {
                  if (onChange) {
                    onChange(item.key)
                  } else {
                    _setActiveKey(item.key)
                  }
                }}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span className="font-bold whitespace-nowrap text-white">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {variant === 'default' && (
        <div className="relative h-fit overflow-hidden">
          {items.map((item) => (
            <div
              key={item.key}
              className={twMerge(
                'space-y-2 transition-transform duration-300',
                item.key === __activeKey
                  ? 'translate-y-0 opacity-100 transition-[opacity,transform]'
                  : 'absolute -right-full translate-y-2 opacity-0',
              )}
            >
              {item.key === __activeKey && item.children}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const Tabs = () => {
  const items = [
    {
      key: 'tab-1',
      icon: <i className="fa-solid fa-camera" />,
      label: 'Tab 1',
      children: (
        <>
          <p>{'Content of Pane 1'}</p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum est libero commodi perferendis alias, fugit consequatur magnam. Nobis enim quibusdam temporibus suscipit assumenda commodi sint reiciendis ut voluptate ipsam!'
            }
          </p>
        </>
      ),
    },
    {
      key: 'tab-2',
      icon: <i className="fa-solid fa-house" />,
      label: 'Tab 2',
      children: (
        <>
          <p>{'Content of Pane 2'}</p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et, qui sunt, delectus at numquam aliquid rerum optio beatae perspiciatis quas quo. Officiis ab necessitatibus culpa, nobis corrupti iste dolor?'
            }
          </p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero vitae non ullam magnam eveniet aliquam, error, ab libero provident, ea fugiat hic quo nesciunt magni pariatur saepe illo veritatis nobis.'
            }
          </p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa officiis et animi tenetur. Eum dolorum suscipit debitis illum, voluptas commodi dolores quis aperiam fugit ducimus, optio incidunt earum harum!'
            }
          </p>
        </>
      ),
    },
    {
      key: 'tab-3',
      icon: <i className="fa-solid fa-image" />,
      label: 'Tab 3',
      children: (
        <>
          <p>{'Content of Pane 3'}</p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio libero esse doloribus provident, dignissimos assumenda ipsa a iure consectetur inventore sapiente deserunt corporis repudiandae debitis nulla tempora velit natus?'
            }
          </p>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rem. Itaque inventore consequatur iste labore voluptatem mollitia quidem laboriosam modi, hic aut repellat quod officia, laborum magni, vitae dolores nisi.'
            }
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <Panel title="Tabs">
        <Tabs1 items={items} />

        <p>{''}</p>

        <CodeBlock
          title="TypeScript"
          language="tsx"
          codes={`
const Tabs: FC<{
  items: ItemProps[]
  defaultActiveKey?: string
  activeKey?: string
  onChange?: (key: string) => void
}> = ({ items, defaultActiveKey, activeKey, onChange }) => {
  const [_activeKey, _setActiveKey] = useState(defaultActiveKey ?? items[0]?.key)
  const __activeKey = activeKey ?? _activeKey

  return (
    // ...
  )
}
        `.trim()}
        />
      </Panel>
    </>
  )
}

export default Tabs
