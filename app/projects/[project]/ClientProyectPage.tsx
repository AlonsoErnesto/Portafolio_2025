'use client';
import useLanguage from '@/hooks/useLanguage';
import proyectDataEN from '@/data/projectsData';
import proyectDataES from '@/data/projectsDataES';
import Image from 'next/image';

type ClientProyectPageProps = {
  proyectId: string;
};

export default function ClientProyectPage({ proyectId }: ClientProyectPageProps) {
  const { resolvedLanguage } = useLanguage();
  const proyectsData = resolvedLanguage === 'es' ? proyectDataES : proyectDataEN;

  const currentProyect = proyectsData.find((p) => p.id === proyectId);

  if (!currentProyect) {
    return <div>Error: Proyect not found</div>;
  }

  return (
    <div className="p-[2rem] h-[100%] overflow-y-scroll">
      <div>
        <h1 className="font-bold">{currentProyect.title_desc}</h1>
        <p>{currentProyect.techs}</p>
        <div className="border border-black hover:text-white dark:border dark:border-white h-10 text-[1.5rem] px-[1rem] inline-block mb-10 mt-5 cursor-pointer hover:bg-selectBtn transition-colors duration-200">
          <a href={currentProyect.href} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
      <div>
        {currentProyect.imgSrc?.length
          ? currentProyect.imgSrc?.map((i, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="flex justify-center pb-14">
                <Image
                  className="border border-BlueText p-3"
                  src={i}
                  alt={currentProyect.title}
                  width={800}
                  height={500}
                />
              </div>
            ))
          : ''}
      </div>
      <div className="grid gap-5">
        {currentProyect.description.map((i, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index}>
            <h2>{i}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
