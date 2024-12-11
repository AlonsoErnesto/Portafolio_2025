import { codeToHtml } from 'shiki';
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';
import fs from 'fs';
import path from 'path';


export async function highlightCode(filePath: string, lang: string) {
  const fileContent = fs.readFileSync(path.resolve('src', filePath), 'utf-8');

  const html = await codeToHtml(fileContent, {
    lang,
    theme: 'github-dark-dimmed',
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
    ],
  });

  return html;
}
