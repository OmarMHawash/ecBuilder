import React from 'react'
import { Separator } from '../ui/separator'

const SeperatorE = ({ title, desc, socials }: SeperatorEProps): JSX.Element => {
  return (
    <div className="seperator">
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">{title}</h4>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          {socials.map((item, index) => (
            <a
              href={item.href}
              key={item.name.toString()}
              className="hover:text-primary"
            >
              {index !== socials.length ? (
                <Separator orientation="vertical" />
              ) : null}
              <div>{item.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

interface SeperatorEProps {
  title: string
  desc: string
  socials: Array<{ name: string; href: string }>
}

export default SeperatorE
