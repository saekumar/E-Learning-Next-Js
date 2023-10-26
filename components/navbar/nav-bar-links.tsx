'use client'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { NAV_LINK } from '@/type'
import Link from 'next/link'
import path from 'path'
interface INavBarLinks {
  links: NAV_LINK[]
  className: string
}

const NavBarLinks: React.FC<INavBarLinks> = ({ links, className }) => {
  return (
    <NavigationMenu className={cn('hidden md:flex', className)}>
      <NavigationMenuList className={className}>
        {links.map(({ id, name, path }) => {
          return (
            <Link href={path} key={id}>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </Link>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBarLinks
