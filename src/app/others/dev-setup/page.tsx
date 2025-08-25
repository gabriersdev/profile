import shiki from "shiki";
import {CodePreview} from "@/components/CodePreview";

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Dev Setup',
}

export default async function DevSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })
  
  const code = highlighter.codeToHtml(`# Setup

- Processador: Rizen 5 5600G
- Placa mãe: Gigabyte Aorus B450M
- Memória: 2x Lexar 16GB 3200Mhz
- Armazenamento: Adata S11 Lite NVME M.2 512GB + Asgard NVME M.2 1TB
- Fonte: Seasonic 450W
- Gabinete: Pichau Astro
- Teclado: Corsair K60 Pro Mecânica Switch Kailh
- Mouse: Fortrek G7 Pro
- Monitores: LG MP400 24" 75Hz e LG MP500 24" 100Hz
- Mouse Pad: KBM 90x35cm`, {lang: 'md'})
  
  return <CodePreview code={code}/>
}
