import '../styles/global.css'

import {Inter, Inter_Tight, JetBrains_Mono} from 'next/font/google'

const inter = Inter({subsets: ['latin']});
const interTight = Inter_Tight({subsets: ['latin']});
const jetBrains = JetBrains_Mono({subsets: ['latin']});
const PUBLIC_URL = "https://gabriers.lts.app.br/";

import {Menu} from '@/components/Menu'
import {Header} from '@/components/Header'
import {Explorer} from '@/components/Explorer'
import {Footer} from '@/components/Footer'
import {OpenFilesTabs} from '@/components/OpenFilesTabs'
import {OpenFilesProvider} from '@/hooks/useOpenFiles'
import React from "react";
import Link from "next/link";

export const metadata = {
  title: {
    default: 'Gabriel Ribeiro - Profile',
    template: '%s | Gabriel Ribeiro',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Web Developer specialized in building interactive and scalable web applications using React, TypeScript, and modern tools. Delivered real-world solutions like a public transport app, a data validation system for banking agents, and automation bots.",
  openGraph: {
    title: 'Gabriel Ribeiro - Profile',
    description: "Web Developer specialized in building interactive and scalable web applications using React, TypeScript, and modern tools. Delivered real-world solutions like a public transport app, a data validation system for banking agents, and automation bots.",
    url: PUBLIC_URL,
    siteName: 'Gabriel Ribeiro - Profile',
    images: [
      {
        url: `${PUBLIC_URL}opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${interTight.className} ${jetBrains.className} select-none`}>
    <head/>
    <body className="bg-[#6B73FF] bg-app">
    <div className="z-10 relative h-screen flex items-center justify-center my-5 md:mb-0 lg:my-0 mx-2">
      <div className="bg-[#232323] overflow-y-scroll border border-white/75 w-full max-w-[1480px] min-h-[80vh] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
        <OpenFilesProvider>
          <Header/>
          
          <div className="grid md:grid-cols-editor max-h-full">
            <Menu/>
            <Explorer/>
            
            <div className="h-full relative flex flex-col">
              <OpenFilesTabs/>
              <div className="h-full relative">{children}</div>
            </div>
          </div>
        </OpenFilesProvider>
        <Footer/>
      </div>
    </div>
    
    <div className={"text-center mb-8 md:hidden"}>
      <Link href={"/files"} className={"w-full text-white hover:text-gray-100 focus:text-gray-400"}>
        <div className={"flex items-center justify-center gap-2"}>
          Explore all files{" "}
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journals" viewBox="0 0 16 16">
            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
          </svg>
        </div>
      </Link>
    </div>
    </body>
    </html>
  )
}
