import shiki from "shiki";
import {CodePreview} from "@/components/CodePreview";

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Gaming Setup',
}

export default async function GamingSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })
  
  const code = highlighter.codeToHtml(`# Game Setup

- Volante Logitech G29
- Marcha Manual Logitech
- Switch Lite`, {lang: 'md'})
  
  return <CodePreview code={code}/>
}
