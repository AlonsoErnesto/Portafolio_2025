interface Experience {
  id: string;
  title: string;
  position: string;
  title_des: string;
  date: string;
  description: string[];
}

const ExperienceList: Experience[] = [
  {
    id: '1',
    title: 'Open Innovate Company SAC',
    position: 'Developer FrontEnd',
    title_des:
      'Desarrolldaor Frontend Middle (ReactJS, TailwindCSS, Typescript, Redux, RxJS, Firebase)',
    date: 'Feb 2024 - Nov 2024',
    description: [
      'En mi rol, me enfoqué en desarrollar **interfaces** y **funcionalidades** (UI/UX) en estrecha colaboración con los **diseñadores de UI** y el equipo de **backend**. Este trabajo conjunto me permitió asegurar la alineación visual y funcional de las **interfaces**, brindando una **experiencia de usuario** óptima y manteniendo los estándares del proyecto.',
      'Gestioné tareas asignadas a través de **Jira** y mantuve una comunicación constante mediante **Slack**. Esto fue clave para coordinar de manera efectiva con el equipo, recibir **retroalimentación** oportuna y asegurar el cumplimiento de la metodología **SCRUM** en cada etapa de desarrollo.',
      'Dentro del proyecto, consumí servicios tanto **internos** como **externos** del equipo de desarrollo. La integración de la **API de ChatGPT** fue especialmente importante para satisfacer las necesidades del cliente. Adicionalmente, utilicé **Firebase** para implementar una **autenticación básica**, asegurando la seguridad y accesibilidad de los usuarios en el entorno de desarrollo.',
      'Para garantizar un flujo de trabajo fluido y estandarizado, empleé herramientas como **Biome**, **Eslint**, **Prettier** y **CSPell**, lo que permitió mantener la calidad y consistencia del código. En el control de versiones, utilicé **Git**, **Git Flow** y **GitHub Actions**, facilitando la colaboración en equipo y la organización de las entregas.',
      'Además, fui parte del equipo de **DevOps**, participando en el despliegue del proyecto en **producción** mediante servicios en la **nube**. Este proceso se diseñó de acuerdo con el **presupuesto** y los **requisitos operativos** del cliente, asegurando la confiabilidad y escalabilidad del sistema.',
    ],
  },
  {
    id: '2',
    title: 'Investac SAC',
    position: 'Developer Backend',
    title_des:
      'Desarrollador Backend (NodeJS, NestJS, Typescript, Express, TypeGraphql, Graphql, RestFul API, Oracle)',
    date: 'Nov 2022 – Ene 2024',
    description: [
      'En mi rol como desarrollador **backend**, utilicé tecnologías como **Node.js**, **TypeScript**, **NestJS**, **TypeGraphQL**, **GraphQL**, **RESTful** y **Oracle**, aplicando una **arquitectura de capas**. Estas herramientas me permitieron construir soluciones sólidas y escalables.',
      'Para asegurar la calidad del código en **producción** y desarrollo, empleé **Jest** y otras herramientas previamente mencionadas. Me encargué de crear **servicios** y **endpoints** clave para el frontend, manteniendo una comunicación constante con el equipo de **interfaz**.',
      'Usé herramientas como **Slack**, **Jira** y **Notion** para organizar y administrar al equipo, facilitando un flujo de trabajo eficiente y colaborativo.',
      'También desarrollé nuevas **lógicas de negocio**, adaptándolas a las necesidades del cliente y los objetivos del proyecto.',
    ],
  },
  {
    id: '3',
    title: 'Exponentia SAC',
    position: 'Developer Full Stack',
    title_des: 'Desarrollador en Typescript (ReactJS, NodeJS, Typescript, Jest, PostgresSQL)',
    date: 'Dic 2021 – Oct 2022',
    description: [
      'En mi rol como desarrollador **full stack** con **TypeScript**, utilicé herramientas de comunicación como **Slack**, **Jira** y **Notion**, así como herramientas de desarrollo conocidas. En cuanto a las tecnologías, trabajé con **ReactJS**, **Node.js**, **Express**, **Redux**, **TypeScript**, **RESTful API** y **Jest**.',
      'Mi función principal era dar mantenimiento a un proyecto ya desarrollado, resolviendo **bugs** y **errores**, además de implementar nueva **lógica de negocio** cuando se requería. Esto implicaba tanto ajustes en el **backend** como en el **frontend**.',
      'Participaba en reuniones periódicas donde el **senior** del proyecto me asignaba nuevas tareas, manteniendo así un flujo de trabajo estructurado y alineado con las necesidades del proyecto.',
    ],
  },
  {
    id: '4',
    title: 'Trainee Java',
    title_des:
      'Desarrollador Java Junior (Angular, Java, Spring, SpringBoot, SpringSecurity, MYSQL)',
    date: 'Abr 2021 – Set 2021',
    position: 'Developer Java',
    description: [
      'En mi rol como desarrollador **junior** en **Java**, participé en un proyecto desarrollado desde cero, utilizando **Java**, **Spring**, **Spring Boot**, **Spring Security**, **MySQL** y **Angular**. Aunque mi enfoque fue en el **backend**, creando **servicios** y **lógica en el servidor**, también me encargué de tareas en el **frontend** con **Angular**, específicamente en la creación de **interfaces**.',
      'Como **junior**, recibía asignaciones pequeñas bajo la supervisión del **senior** del proyecto, lo que me permitió aprender profundamente sobre desarrollo de **servidores** y despliegue en **producción**.',
      'En este proyecto, utilizamos herramientas como **Slack**, **Jira**, **Eslint**, **Prettier**, **Git**, **Git Flow**, **GitHub** y **GitHub Actions** para el control de versiones y la organización del equipo, facilitando un desarrollo colaborativo y estandarizado.',
    ],
  },
  {
    id: '5',
    title: 'Trainee C#',
    position: 'C# Developer',
    title_des: 'Desarrollador C# Junior (ASP.NET Core, .NET, MVC, Blazor, SQL Server)',
    date: 'Mar 2020 - Nov 2020',
    description: [
      'Como practicante en **C#**, trabajé en proyectos pequeños desarrollados con **.NET**, **ASP.NET Core**, **MVC**, **Blazor** y **SQL Server**. Mi rol consistió en apoyar el desarrollo de proyectos tanto **web** como de **escritorio**, enfocado principalmente en el **backend**.',
      'Mis responsabilidades incluían crear nuevos **servicios** y solucionar **bugs** y **errores** en los proyectos asignados, los cuales recibía a diario o semanalmente. Utilizábamos **Git** y **GitHub** para el control de versiones, y herramientas como **Slack** y **Teams** para la comunicación con el equipo.',
      'Durante esta experiencia, tuve la oportunidad de aprender sobre **DevOps** y **QA**, ya que la empresa tenía un enfoque fuerte en estos aspectos para proyectos empresariales. Esto me permitió adquirir conocimientos clave en estos procesos.',
      'Durante esta experiencia, tuve la oportunidad de aprender sobre **DevOps** y **QA**, ya que la empresa tenía un enfoque fuerte en estos aspectos para proyectos empresariales. Esto me permitió adquirir conocimientos clave en estos procesos.',
    ],
  },
  {
    id: '6',
    title: 'Trainee (HTML, CSS, JS, Git)',
    position: 'Developer Vanilla JS',
    title_des: 'Desarrollador de Plantillas WEB (HTML, CSS, JS, Git, Github)',
    date: 'Jun 2019 - Nov 2019',
    description: [
      'Como practicante en desarrollo de **plantillas**, me encargué de crear **blogs**, **portafolios** y **páginas web estáticas** utilizando tecnologías como **HTML**, **CSS** y **JavaScript** vanilla. En este proyecto, trabajé en colaboración con una compañera de **UI/UX**, quien me enviaba las **interfaces** y yo me encargaba de desarrollarlas.',
      'Usábamos **Git** y **GitHub** para el control de versiones, y herramientas como **Figma** y **Jira** para la gestión del trabajo y la comunicación entre el equipo. Lo que más me motivó de esta experiencia fue la **creatividad** que teníamos al desarrollar páginas web increíbles, con un enfoque en la **estética** y **funcionalidad**.',
      'Además, tuve la oportunidad de aprender sobre **frameworks de CSS** como **TailwindCSS** y **SASS** como preprocesador, lo que mejoró significativamente mi fluidez en el desarrollo **frontend**. Esta experiencia me permitió profundizar mucho más en el **diseño** y desarrollo de **interfaces web**.',
      'Lo que más disfruté fue la posibilidad de trabajar en proyectos visualmente atractivos y aprender nuevas herramientas y técnicas que enriquecieron mi desarrollo como programador **frontend**.',
    ],
  },
];

export default ExperienceList;
