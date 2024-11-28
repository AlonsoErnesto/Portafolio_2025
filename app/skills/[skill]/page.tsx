import { notFound } from 'next/navigation';
import skillsData from '@/data/skillsData';
import ClientSkillsPage from './ClientSkillsPage';

type SkillPageProps = {
  params: {
    skill: string;
  };
};

export default async function SkillPage({ params }: SkillPageProps) {
  const skill = await params.skill;
  const skillData = skillsData.find((p) => p.id === skill);

  if (!skillData) {
    notFound();
  }

  return <ClientSkillsPage skill={skillData} />;
}
