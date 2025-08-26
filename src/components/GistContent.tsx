import shiki from "shiki"
import {CodePreview} from "./CodePreview"

interface GistContentProps {
  gistUrl: string
}

export async function GistContent({gistUrl}: GistContentProps) {
  const settingsResponse = await fetch(gistUrl);
  
  const settings = await settingsResponse.text();
  
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  });
  
  const languages = ["json", "txt", "md", "js", "py", "php"];
  const lang = gistUrl.split(".")[gistUrl.split(".").length - 1];
  
  const code = highlighter.codeToHtml(settings, {lang: languages.includes(lang) ? lang : "txt"});
  
  return <CodePreview code={code} raw={settings}/>
}
