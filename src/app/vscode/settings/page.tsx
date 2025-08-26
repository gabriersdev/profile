import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/gabriersdev/31874adc29f8c32cddb5be776527e643/raw/5523fd7f21935b54c64212494fc4ef9070f518f5/vs-code-settings.json" />
}