"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {BsPerson,} from 'react-icons/bs';
import {MenuButton} from './MenuButton';
import {links} from "@/resources/resources"

export function SocialLinksMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Redes sociais">
        {/*@ts-ignore*/}
        <MenuButton icon={BsPerson}/>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content side='right' className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto">
          {links.map(socialItem => {
            return (
              <DropdownMenu.Item key={socialItem.url} className="outline-none">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                >
                  {socialItem.icon}
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]"/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
