import { notFound } from 'next/navigation';
import ClientExperiencePage from './ClientExperiencePage';

import experiencesDataEN from '@/data/experienceData';

type ExperiencePageProps = {
  params: {
    experience: string;
  };
};

export async function generateStaticParams() {
  return experiencesDataEN.map((exp) => ({
    experience: exp.id,
  }));
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = experiencesDataEN.find((p) => p.id === params.experience);

  if (!experience) {
    notFound();
  }

  return <ClientExperiencePage experienceId={params.experience} />;
}
