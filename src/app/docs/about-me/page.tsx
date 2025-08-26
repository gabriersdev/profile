import shiki from "shiki";
import {CodePreview} from "@/components/CodePreview";

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'About Me',
}

export default async function AboutMe() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })
  
  const code = highlighter.codeToHtml(`
# About Me
  
I'm a Web Developer with a technical background in Internet Informatics and currently pursuing a degree in Systems Analysis and Development. I specialize in building responsive interfaces and interactive applications using React, TypeScript, JavaScript, HTML, and CSS, alongside tools like Next.js and Vite.

## My career

- I started studying development in mid-2021 and in that same year I wrote my first line of code - in Portugol, but still code.
- In 2022, I graduated as a Technician in Informatics for the Internet.
- I have been working with development since 2023.
- I have been a freelance developer since 2024.
- In 2025, I graduated in Analysis and Systems Development.

## In my spare time, I like to...

- Play Eurotruck Simulator.
- Ride a bicycle.
- Watch investigation and suspense movies and series.
- Watch live streams on Twitch.
- Listen to music and a good podcast.

  `, {lang: 'md'})
  
  return <CodePreview code={code}/>
}
