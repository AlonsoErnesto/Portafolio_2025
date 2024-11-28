'use client';
import LanguageSwitch from '@/components/social-icons/LanguageSwitch';
import ThemeSwitch from '@/components/ThemeSwitch';
import type { Verse } from '@/interface/apiBiblie';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import useLanguage from './hooks/useLanguage';
import { DescribeData } from '@/data/describeData';
import { describeDataES } from '@/data/describeDataES';
import { useMediaQuery } from 'react-responsive';

function processTextWithHighlights(text: string): React.ReactNode {
  const colors = ['text-BlueText', 'text-OrageText', 'text-PurpleText'];
  let colorIndex = 0;
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const styledText = (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className={`${colors[colorIndex]}`}>
          {part.slice(2, -2)} {}
        </span>
      );
      colorIndex = (colorIndex + 1) % colors.length;
      return styledText;
    }
    return part;
  });
}

export default function Home() {
  const { resolvedLanguage } = useLanguage();
  const describeData = resolvedLanguage === 'es' ? describeDataES : DescribeData;
  const maxWidth768 = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const maxWidth500 = useMediaQuery({
    query: '(max-width: 500px)',
  });
  const [verse, setVerse] = useState<Verse | null>(null);
  const pdfUrl = '/static/pdf/CV.pdf';
  const fetchVerse = useCallback(async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
      const data = await response.json();
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching the verse:', error);
    }
  }, []);

  useEffect(() => {
    fetchVerse();
  }, [fetchVerse]);

  const asciiArt = `
░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░    ░▒▓████████▓▒░▒▓███████▓▒░░▒▓███████▓▒░░▒▓████████▓▒░░▒▓███████▓▒░▒▓████████▓▒░▒▓██████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░       ░▒▓█▓▒▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░  ░▒▓█▓▒▒▓█▓▒░     ░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░  ░▒▓██████▓▒░   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░  ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░▒▓██▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░  ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░
░▒▓███████▓▒░░▒▓████████▓▒░  ░▒▓██▓▒░░▒▓██▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░   ░▒▓█▓▒░   ░▒▓██████▓▒░
  `;

  return (
    <div className="relative w-full h-full text-[15px] overflow-y-scroll  dark:text-customGray text-gray-950">
      <div className={`flex items-center flex-col  ${maxWidth768 ? 'p-[2rem]' : 'p-[1rem]'}`}>
        <div className={`w-[100%] flex justify-between items-center  ${maxWidth500 && 'hidden'}`}>
          <div>
            <span className="text-[15px]">dev.Ernesto</span>
          </div>
          <div>
            <div className="flex items-center justify-center gap-3 text-[12px]">
              <span>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </span>
              <span>
                <a href="https://www.github.com/AlonsoErnesto/" target="_blank" rel="noreferrer">
                  Github
                </a>
              </span>
              <span>
                {' '}
                <a
                  href="https://www.linkedin.com/in/ernesto-alonso-095b91300"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <span>
                <LanguageSwitch />
              </span>
              <span>
                <ThemeSwitch />
              </span>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div
            className=" dark:text-white text-black"
            style={{
              fontSize: '.8vw',
              whiteSpace: 'pre',
              fontFamily: 'monospace',
            }}
          >
            {asciiArt}
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-5 text-[17px]">
          {describeData.map((paragraph, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index}>
              {paragraph.split('\n').map((line, lineIndex) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <p key={lineIndex} className="leading-[1.5rem]">
                  {processTextWithHighlights(line)}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="relative w-full py-[.5rem] px-[2rem] border border-bluecleare mt-[2rem]">
          <Image
            className="absolute -left-5 -top-7 transition duration-300 hover:brightness-200 cursor-pointer "
            src="/static/images/btn.svg"
            alt="My Icon"
            width={40}
            height={40}
            onClick={fetchVerse}
          />
          <div>
            {verse ? (
              <>
                <p className="italic">{verse.text}</p>
                <p className="italic text-BlueText font-bold text-[13px]">
                  {verse.bookname} {verse.chapter}:{verse.verse}
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
