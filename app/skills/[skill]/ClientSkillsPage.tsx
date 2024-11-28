'use client';

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { solarizedlight as themeLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { coy as themeLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import skillDataEN from '@/data/skillsData';
import skillDataES from '@/data/skillsDataES';
import useLanguage from '@/hooks/useLanguage';
import { useTheme } from 'next-themes';

const ThemeCode = {
  ...theme,
  'pre[class*="language-"]': {
    ...theme['pre[class*="language-"]'],
    background: 'transparent',
    paddingLeft: 15,
    paddingTop: 5,
  },
};
const ThemeCodeLight = {
  ...themeLight,
  'pre[class*="language-"]': {
    ...theme['pre[class*="language-"]'],
    background: 'transparent',
    paddingLeft: 15,
    paddingTop: 5,
  },
};

interface SkillCodeSnippetProps {
  skill: {
    id: string;
    title: string;
    language?: string;
    icon: string;
    description: string[];
    directionFile?: string;
  };
}

const SkillCodeSnippet: React.FC<SkillCodeSnippetProps> = ({ skill }) => {
  const { theme } = useTheme();
  console.log('theme', theme);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { resolvedLanguage } = useLanguage();
  const skillsData = resolvedLanguage === 'es' ? skillDataES : skillDataEN;
  const currentSkill = skillsData.find((p) => p.id === skill.id);

  if (!currentSkill) {
    return <div>Error: Project not found</div>;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* eslint-disable react-hooks/rules-of-hooks */
  useEffect(() => {
    if (skill?.directionFile) {
      fetch(skill.directionFile)
        .then((res) => res.text())
        .then((text) => setFileContent(text))
        .catch((error) => console.error('Error loading file:', error));
    }
  }, [skill?.directionFile]);

  const colorSequence = ['#58a6ff', '#ec8e2c', '#bc8cff'];
  let colorIndex = 0;

  const renderColoredParagraph = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    return text.split(regex).map((part, index) => {
      if (index % 2 === 1) {
        const color = colorSequence[colorIndex % colorSequence.length];
        colorIndex++;
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <span key={index} style={{ color }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  if (!isClient) {
    return <div className="h-[100%] overflow-y-auto p-8"></div>;
  }

  return (
    <div className="h-[100%] overflow-y-auto p-8">
      {currentSkill?.description.map((paragraph, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} className="relative py-2 w-auto max-w-full">
          <p className="whitespace-normal break-words">{renderColoredParagraph(paragraph)}</p>
        </div>
      ))}

      {fileContent ? (
        <div className="border border-BlueText mt-10">
          <SyntaxHighlighter
            language={skill?.language}
            style={theme === 'light' ? ThemeCodeLight : ThemeCode}
          >
            {fileContent}
          </SyntaxHighlighter>
        </div>
      ) : null}
    </div>
  );
};

export default SkillCodeSnippet;
