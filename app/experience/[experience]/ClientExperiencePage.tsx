'use client';
import useLanguage from '@/hooks/useLanguage';
import experiencesDataEN from '@/data/experienceData';
import experiencesDataES from '@/data/experienceDataES';

type ClientExperiencePageProps = {
  experienceId: string;
};

function applyRandomColorToText(text: string) {
  const colors = ['text-BlueText', 'text-OrageText', 'text-PurpleText'];
  const regex = /\*\*(.*?)\*\*/g;

  return text.split(regex).map((part, index) => {
    if (index % 2 === 1) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className={color}>
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function ClientExperiencePage({ experienceId }: ClientExperiencePageProps) {
  const { resolvedLanguage } = useLanguage();
  const experiencesData = resolvedLanguage === 'es' ? experiencesDataES : experiencesDataEN;

  const currentExperience = experiencesData.find((p: any) => p.id === experienceId);

  if (!currentExperience) {
    return <div>Error: Experience not found</div>;
  }

  return (
    <div className="p-[2rem] h-[100%] overflow-y-auto relative">
      <div className="w-full">
        <h1 className="text-purple-400 font-semibold text-[1.2rem]">
          {currentExperience.title_des}
        </h1>
        <p className="text-orange-400 font-semibold text-[1rem]">{currentExperience.date}</p>
      </div>
      <div className="pt-10 leading-[1.5rem]">
        <div className="grid gap-5">
          {currentExperience.description.map((i, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index}>
              <p>{applyRandomColorToText(i)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
