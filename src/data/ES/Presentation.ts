interface Presentation {
  id: string;
  title: string;
  title_desc: string;
  tag: string;
  description: string[];
  href?: string[];
}

const PresentationList: Presentation[] = [
  {
    id: '1',
    title: `Desarrollador de software (Perú)`,
    tag: `Hola, Soy desarrollador web full stack con mas de 3 años de experiencia.`,
    title_desc: '[Built in 2024]',
    description: [
      'Hola, soy **Ernesto** **Alonso, ** \n un desarrollador especialidazo en el **backend.**',
      '**Apasionado** por el desarrollo, creando nuevos proyectos utilizando tecnologías altamente adaptables para lograr el mejor rendimiento. Aunque mi enfoque principal es el **backend**, la mayor parte de mi experiencia profesional ha sido como **desarrollador full-stack.** \n También disfruto programando **aplicaciones** para **móviles** y **escritorio**, y experimentando con **nuevas** **tecnologías.**',
      'En mi trayectoria profesional, he tenido la oportunidad de aprender de **desarrolladores senior**, quienes me inspiran a aspirar a su nivel en el futuro. Mi primer objetivo es convertirme en un mejor **desarrollador** dominando las **tecnologías** en las que me especializo.',
      'Otro gran interés mío es el diseño de **experiencia de usuario (UX)**, al que me gusta abordar de manera amplia y no limitarlo solo a las **interfaces de usuario**.',
      'Siempre estoy buscando nuevos **desafíos** y **oportunidades** para aprender porque creo que el crecimiento constante es esencial en nuestra profesión.',
      'Haz clic en una sección de arriba para saber más sobre mi **trabajo** y experiencias pasadas.',
    ],
    href: ['https://github.com/AlonsoErnesto','https://linkedin.com/in/devernesto','https://linktr.ee/ernesto_alonso']
  }]

  export default PresentationList;