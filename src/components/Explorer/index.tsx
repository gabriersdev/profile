import {
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
} from 'lucide-react';
import {OpenFilesSubMenu} from '../OpenFilesTabs/OpenFilesSubMenu';
import {File} from './File';
import {Folder} from './Folder';
import {SubMenu} from './SubMenu';
import React from "react";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/vscode/settings": {
    icon: <FileJson size={16}/>,
    title: "settings.json",
  },
  "/vscode/extensions": {
    icon: <FileJson size={16}/>,
    title: "extensions.json",
  },
  "/docs/linktree": {icon: <Terminal size={16}/>, title: "linktree.md",},
  "/docs/about-me": {icon: <Terminal size={16}/>, title: "about-me.md"},
  "/others/dev-setup": {icon: <Cpu size={16}/>, title: "dev.setup"},
  "/others/gaming-setup": {icon: <Joystick size={16}/>, title: "gaming.setup",},
};

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8] hidden md:block">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5}/>
      </strong>
      
      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu/>
        </SubMenu>
        
        <SubMenu defaultOpen title="FALA-DEV">
          <Folder defaultOpen title="Visual Studio Code">
            <File href="/vscode/settings">
              <FileJson size={16}/>
              settings.json
            </File>
            <File href="/vscode/extensions">
              <FileJson size={16}/>
              extensions.json
            </File>
          </Folder>
          
          <Folder defaultOpen title="Docs">
            <File href="/docs/about-me">
              <Terminal size={16}/>
              about-me.md
            </File>
            <File href="/docs/linktree">
              <Terminal size={16}/>
              linktree.md
            </File>
          </Folder>
          
          <Folder defaultOpen title="Others">
            <File href="/others/dev-setup">
              <Cpu size={16}/>
              dev.setup
            </File>
            <File href="/others/gaming-setup">
              <Joystick size={16}/>
              gaming.setup
            </File>
          </Folder>
        </SubMenu>
      </nav>
    </div>
  )
}
