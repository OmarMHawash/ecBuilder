import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu'

import { headerData } from '../../../utils/newProject'

const NavMenu = (): JSX.Element => {
  return (
    <div className="nav-menu">
      <NavigationMenu>
        <NavigationMenuList>
          {headerData.main_nav.map((item) => (
            <NavigationMenuItem
              key={item.name.toString()}
              className="header-item"
            >
              <a href={item.href}>
                <div className="text-sm wt-5">{item.name}</div>
              </a>
            </NavigationMenuItem>
          ))}
          {headerData.more_nav.enabled && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {headerData.more_nav.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {headerData.more_nav.list.map((component) => (
                    <a key={component.title} href={component.href}>
                      <div>
                        <h4>{component.title}</h4>
                        <p>{component.description}</p>
                      </div>
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavMenu
