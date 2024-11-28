// app/projects/[project]/page.tsx
import { notFound } from 'next/navigation';
import projectsData from '@/data/projectsData';
import ClientProyectPage from './ClientProyectPage';

type ProjectPageProps = {
  params: {
    project: string;
  };
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    project: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.project);

  if (!project) {
    notFound();
  }

  return <ClientProyectPage proyectId={params.project} />;
}
