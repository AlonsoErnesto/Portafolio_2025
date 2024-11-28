import { notFound } from 'next/navigation';
import skillsData from '@/data/skillsData';
import ClientSkillsPage from './ClientSkillsPage';

type SkillPageProps = {
  params: {
    skill: string;
  };
};

export async function generateStaticParams() {
  return skillsData.map((skill) => ({
    skill: skill.id,
  }));
}

export default function SkillPage({ params }: SkillPageProps) {
  const skill = skillsData.find((p) => p.id === params.skill);
  if (!skill) {
    notFound();
  }

  return <ClientSkillsPage skill={skill} />;
}
