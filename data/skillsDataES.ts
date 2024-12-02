interface Skills {
  id: string;
  title: string;
  language?: string;
  icon: string;
  description: string[];
  codeExample?: string;
  directionFile?: string;
  relatedTechnologies: string[];
}

const skillsData: Skills[] = [
  {
    id: '1',
    title: 'HTML5',
    language: 'html',
    icon: 'uil:html5',
    description: [
      'HTML5 es el bloque fundamental para crear páginas web estructuradas, accesibles y modernas.',
      'Con más de **3 años** de experiencia en HTML5, manejo conceptos como **semántica**, **formularios avanzados**, y multimedia (**audio/video tags**).',
      'He usado HTML5 junto con tecnologías como **ARIA** para accesibilidad y frameworks modernos como **ReactJS** y **Angular**, asegurando estándares web y rendimiento óptimo.',
    ],
    directionFile: '/snippets/html.html',
    relatedTechnologies: ['SVG', 'ARIA', 'Web Components'],
  },
  {
    id: '2',
    title: 'CSS',
    language: 'css',
    icon: 'flowbite:css-solid',
    description: [
      'CSS es el lenguaje de estilo que transforma las páginas web en interfaces atractivas y responsivas.',
      'Con más de **3 años** trabajando con CSS, domino propiedades modernas como **flexbox**, **grid**, **animaciones CSS**, y el uso de variables para sistemas de diseño escalables.',
      'He implementado estilos en aplicaciones utilizando **SASS**, **TailwindCSS**, y diseño responsivo (**mobile-first**) para mejorar la experiencia del usuario.',
    ],
    directionFile: '/snippets/css.css',
    relatedTechnologies: ['SASS', 'LESS', 'TailwindCSS', 'Bootstrap'],
  },
  {
    id: '3',
    title: 'JavaScript',
    icon: 'cib:javascript',
    language: 'javascript',
    description: [
      'JavaScript es un lenguaje esencial para crear aplicaciones web interactivas y dinámicas.',
      'Con más de **3 años** de experiencia, domino técnicas avanzadas como **promesas**, **async/await**, y manejo de **APIs REST**.',
      'He utilizado JavaScript en front-end con frameworks como **ReactJS** y en back-end con **Node.js**, construyendo aplicaciones escalables y optimizadas.',
    ],
    directionFile: '/snippets/javascript.js',
    relatedTechnologies: ['jQuery', 'D3.js', 'Chart.js', 'WebSockets'],
  },
  {
    id: '4',
    title: 'TypeScript',
    language: 'typescript',
    icon: 'akar-icons:typescript-fill',
    description: [
      'TypeScript agrega **tipos estáticos** a JavaScript, mejorando la calidad del código y previniendo errores.',
      'Con más de **3 años** de experiencia, domino características como **interfaces**, **genéricos**, y configuraciones avanzadas en **tsconfig.json**.',
      'He implementado TypeScript en proyectos con **NestJS** y **Angular**, aprovechando su sistema de tipos para desarrollar aplicaciones robustas y escalables.',
    ],
    directionFile: '/snippets/typescript.ts',
    relatedTechnologies: ['TSlint', 'NestJS', 'Angular', 'RxJS'],
  },
  {
    id: '5',
    title: 'ReactJS',
    language: 'tsx',
    icon: 'grommet-icons:reactjs',
    description: [
      'ReactJS es una biblioteca popular de JavaScript para construir interfaces de usuario modernas y dinámicas.',
      'Con más de **3 años** de experiencia, tengo un sólido manejo de **hooks**, **context API**, y herramientas como **React Router** y **Redux** para la gestión del estado.',
      'He construido aplicaciones SPA, integrando APIs externas, animaciones con **Framer Motion**, y optimizando el rendimiento con **memoization**.',
    ],
    directionFile: '/snippets/reactjs.tsx',
    relatedTechnologies: ['Next.js', 'Redux', 'React Router', 'Material-UI'],
  },
  {
    id: '6',
    title: 'Angular',
    icon: 'mdi:angular',
    language: 'tsx',
    description: [
      'Angular es una plataforma poderosa basada en **TypeScript** para construir aplicaciones web modernas.',
      'Con más de **1 años** de experiencia, domino **modulos**, **RxJS** para programación reactiva, y directivas personalizadas para reutilización de código.',
      'He creado aplicaciones escalables utilizando **lazy loading**, **guards**, y optimización de rendimiento con **Change Detection Strategies.**',
    ],
    directionFile: '/snippets/angular.ts',
    relatedTechnologies: ['Ionic', 'NgRx', 'Angular Material', 'PrimeNG'],
  },
  {
    id: '7',
    title: 'C#',
    language: 'cs',
    icon: 'devicon-plain:csharp',
    description: [
      '**C#** es un lenguaje orientado a objetos diseñado por Microsoft, ideal para **aplicaciones .NET.**',
      'Con más de **1 años** de experiencia, manejo características como **LINQ**, **async/await**, y desarrollo de **APIs REST** con **ASP.NET Core**.',
      'He construido soluciones robustas para empresas utilizando **Entity Framework** y patrones como **MVC** y **repositorios**.',
    ],
    directionFile: '/snippets/csharp.cs',
    relatedTechnologies: ['ASP.NET', 'Entity Framework', 'Xamarin', 'Blazor'],
  },
  {
    id: '8',
    title: 'Java',
    icon: 'fontisto:java',
    language: 'java',
    description: [
      '**Java** es un **lenguaje de programación orientado a objetos** ampliamente utilizado, conocido por su **portabilidad** entre plataformas.',
      'Con más de un años de experiencia en **Java**, tengo un sólido entendimiento de **conceptos clave** como **POO**, **multihilos** y la **JVM**.',
      'He utilizado **Java** para construir **aplicaciones a nivel empresarial**, enfocándome en **escalabilidad**, **rendimiento** y **mantenibilidad**.',
    ],
    directionFile: '/snippets/java.java',
    relatedTechnologies: ['Spring', 'Hibernate', 'Kotlin', 'JUnit'],
  },
  {
    id: '9',
    title: 'Node.js',
    language: 'ts',
    icon: 'ri:nodejs-fill',
    description: [
      'Node.js permite construir aplicaciones del lado del servidor rápidas y escalables.',
      'Con más de **3 años** de experiencia, domino **event loop**, **streams**, y paquetes como **Express**, **Socket.IO**, y **Nodemon**.',
      'He construido APIs RESTful y microservicios con autentificación **(JWT, OAuth)** e integración de bases de datos como **MongoDB** y **PostgreSQL.**',
    ],
    directionFile: '/snippets/node.ts',
    relatedTechnologies: ['Apollo Server', 'TypeGraphQL', 'Prisma', 'REST APIs'],
  },
  {
    id: '10',
    title: 'Express',
    icon: 'simple-icons:express',
    language: 'ts',
    description: [
      '**Express** es un **framework web minimalista y flexible de Node.js**, utilizado para construir **APIs** y **aplicaciones del lado del servidor**.',
      'Con más de tres años de experiencia en **Express**, tengo un sólido entendimiento de **enrutamiento**, **middleware** y **manejo de solicitudes**.',
      'He utilizado **Express** para construir **APIs RESTful** y **microservicios**, enfocándome en **rendimiento**, **seguridad** y **escalabilidad**.',
    ],
    directionFile: '/snippets/express.ts',
    relatedTechnologies: ['Node.js', 'JWT', 'Sequelize', 'MongoDB'],
  },
  {
    id: '11',
    title: 'NestJS',
    language: 'ts',
    icon: 'simple-icons:nestjs',
    description: [
      'NestJS es un marco de Node.js diseñado para construir aplicaciones empresariales modulares.',
      'Con más de **3 años** de experiencia, utilizo su arquitectura basada en decoradores, **DI** (Dependency Injection), y manejo avanzado de **middleware** y **pipes**.',
      'He integrado servicios como **RabbitMQ**, **Redis**, y autenticación con **PassportJS** para aplicaciones distribuidas y seguras.',
    ],
    directionFile: '/snippets/nest.ts',
    relatedTechnologies: ['TypeScript', 'GraphQL', 'RxJS', 'PostgreSQL'],
  },
  {
    id: '12',
    title: 'GraphQL',
    language: 'graphql',
    icon: 'mdi:graphql',
    description: [
      'GraphQL permite una comunicación eficiente y flexible entre clientes y servidores.',
      'Con más de **3 años** de experiencia, manejo esquemas complejos, **resolvers**, y optimización de consultas con **DataLoader**.',
      'He construido APIs GraphQL integrando fuentes como **MongoDB** y **PostgreSQL**, asegurando consultas rápidas y eficientes.',
    ],
    directionFile: '/snippets/graphql.gql',
    relatedTechnologies: ['Apollo Server', 'TypeGraphQL', 'Prisma', 'REST APIs'],
  },
  {
    id: '13',
    title: 'Oracle',
    language: 'sql',
    icon: 'simple-icons:oracle',
    description: [
      'Oracle es un potente sistema de gestión de bases de datos relacionales utilizado para manejar grandes volúmenes de datos. Es conocido por su robustez y escalabilidad en entornos empresariales.',
      'Con **un años de experiencia** en Oracle, tengo un conocimiento profundo de su **sintaxis SQL**, optimización de consultas y manejo de bases de datos relacionales.',
      'He trabajado con Oracle en sistemas empresariales, diseñando bases de datos eficientes y asegurando una integración fluida con aplicaciones de backend.',
    ],
    relatedTechnologies: [
      'PL/SQL',
      'Oracle SQL Developer',
      'Data Guard',
      'RAC (Real Application Clusters)',
      'TNS Listener',
    ],
    directionFile: '/snippets/oracle.sql',
  },
  {
    id: '17',
    title: 'Firebase',
    language: 'ts',
    icon: 'mdi:firebase',
    description: [
      'Firebase es una plataforma completa para el desarrollo de aplicaciones móviles y web que incluye servicios de autenticación, bases de datos en tiempo real y hosting.',
      'Con más de **1 años de experiencia** en Firebase, he utilizado herramientas como **Firestore** y **Authentication** para construir aplicaciones en tiempo real y con usuarios autenticados.',
      'He implementado Firebase en proyectos de producción, optimizando la experiencia del usuario y sincronizando datos de manera eficiente entre dispositivos y la nube.',
    ],
    relatedTechnologies: [
      'Firestore',
      'Firebase Authentication',
      'Firebase Hosting',
      'Cloud Functions',
      'Cloud Messaging',
    ],
    directionFile: '/snippets/firebase.ts',
  },
  {
    id: '18',
    title: 'Github Actions',
    icon: 'hugeicons:github',
    language: 'yml',
    description: [
      'GitHub Actions es una potente herramienta para la automatización de flujos de trabajo en proyectos de software. Permite configurar pipelines de CI/CD directamente desde repositorios de código.',
      'Con más de **2 años de experiencia** en GitHub Actions, he creado pipelines para pruebas automatizadas, despliegues en entornos en la nube y monitorización de procesos de desarrollo.',
      'He integrado GitHub Actions con múltiples plataformas, mejorando la eficiencia del equipo y asegurando despliegues consistentes y de alta calidad.',
    ],
    relatedTechnologies: ['CI/CD', 'Docker', 'AWS', 'Azure Pipelines', 'Jenkins'],
    directionFile: '/snippets/githubactions.yml',
  },
  {
    id: '19',
    title: 'AWS',
    language: 'yml',
    icon: 'mdi:aws',
    description: [
      'Amazon Web Services (AWS) es una plataforma de servicios en la nube que permite a los desarrolladores crear aplicaciones escalables, seguras y de alto rendimiento.',
      'Con más de **1 años de experiencia** en AWS, he utilizado servicios como **EC2**, **S3** y **Lambda** para implementar soluciones completas y eficientes.',
      'He diseñado arquitecturas en AWS para aplicaciones empresariales, optimizando el uso de recursos, asegurando alta disponibilidad y reduciendo costos operativos.',
    ],
    relatedTechnologies: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'DynamoDB'],
    directionFile: '/snippets/aws.yml',
  },
  {
    id: '20',
    title: 'Git',
    icon: 'simple-icons:git',
    language: 'bash',
    description: [
      'Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software para gestionar y rastrear cambios en el código fuente.',
      'Con más de **3 años de experiencia** en Git, tengo una sólida comprensión de ramas, **merge conflicts** y estrategias como **Git Flow** y **trunk-based development**.',
      'He utilizado Git para coordinar equipos de desarrollo, implementando flujos de trabajo eficientes y garantizando la integridad del código en proyectos colaborativos.',
    ],
    relatedTechnologies: ['GitHub', 'GitLab', 'GitFlow'],
    directionFile: '/snippets/git.sh',
  },
  {
    id: '21',
    title: 'Linux',
    icon: 'simple-icons:linux',
    language: 'bash',
    description: [
      'Linux es un sistema operativo **open source** ampliamente utilizado en servidores, dispositivos embebidos y entornos de desarrollo debido a su flexibilidad y robustez.',
      'Con más de **2 años de experiencia** en Linux, he manejado configuraciones avanzadas de sistema, administración de usuarios y optimización de servidores.',
      'He utilizado Linux como entorno principal de desarrollo, maximizando la eficiencia del flujo de trabajo a través de **bash scripting** y herramientas personalizadas.',
    ],
    relatedTechnologies: ['Bash', 'SSH', 'Docker', 'Systemd'],
    directionFile: '/snippets/linux.sh',
  },
  {
    id: '22',
    title: 'Software Architecture',
    icon: 'carbon:software-design',
    language: 'text',
    description: [
      'La arquitectura de software es el proceso de diseñar la estructura y componentes de sistemas de software complejos.',
      'Con más de **2 años de experiencia** en arquitectura de software, tengo una comprensión sólida de principios como la separación de preocupaciones y los patrones de diseño.',
      'He utilizado principios de arquitectura de software para diseñar sistemas escalables, mantenibles y eficientes, asegurando que los requisitos sean completamente atendidos.',
    ],
    relatedTechnologies: [
      'SOLID',
      'MVC',
      'Microservices',
      'CQRS',
      'Event-Driven Design',
      'Clean Arquitecture',
    ],
    directionFile: '',
  },
  {
    id: '23',
    title: 'NeoVim',
    icon: 'simple-icons:neovim',
    language: 'text',
    description: [
      'NeoVim es un editor de texto avanzado basado en Vim, utilizado por desarrolladores para editar código de manera eficiente.',
      'Con más de **2 años de experiencia** en NeoVim, tengo un conocimiento profundo de su sistema de configuración, atajos y plugins.',
      'He utilizado NeoVim como mi editor principal, optimizando mi flujo de trabajo mediante la personalización y el uso de plugins avanzados.',
    ],
    relatedTechnologies: ['Vim', 'Lua', 'Tmux', 'LSP (Language Server Protocol)', 'Tree-sitter'],
    directionFile: '',
  },
  {
    id: '24',
    title: 'Visual Studio Code',
    icon: 'simple-icons:visualstudiocode',
    language: 'text',
    description: [
      '**Visual Studio Code** (VSCode) es un editor de código fuente liviano pero poderoso, ampliamente utilizado en el desarrollo de software debido a su amplia **compatibilidad con lenguajes** y **extensiones**.',
      'Con más de **4 años de experiencia** usando **VSCode**, he optimizado mi flujo de trabajo con herramientas como **Prettier** para el formato de código y **ESLint** para el análisis estático de **JavaScript** y **TypeScript**.',
      'He personalizado **VSCode** con extensiones avanzadas como **GitLens** para mejorar la integración con **Git**, **Debugger for Chrome** para la depuración, y **Live Server** para previsualizar cambios en tiempo real.',
      'Además, he configurado **VSCode** para mejorar la productividad mediante atajos personalizados, temas oscuros para evitar la fatiga visual y el uso de **snippets** para ahorrar tiempo en tareas repetitivas.',
    ],
    directionFile: '',
    relatedTechnologies: [
      'Prettier',
      'ESLint',
      'GitLens',
      'Live Server',
      'Debugger for Chrome',
      'Snippets',
    ],
  },
  {
    id: '25',
    title: 'API Testing Tools',
    icon: 'simple-icons:postman',
    language: 'json',
    description: [
      '**API Testing Tools** son entornos utilizados para probar, depurar y gestionar **solicitudes** y **respuestas** de **APIs**.',
      'Con más de **tres años de experiencia** utilizando herramientas como **Postman** y **Hoppscotch**, he optimizado el proceso de prueba de **APIs RESTful**, manejo de **tokens de autenticación** y pruebas de **cookies** para una **comunicación segura**.',
      'He utilizado estas herramientas para automatizar pruebas, gestionar **colecciones de API** y realizar pruebas de **rendimiento** para asegurar que los **endpoints** sean robustos y puedan manejar grandes volúmenes de solicitudes de manera eficiente.',
      'Además, he integrado estas herramientas con **CI/CD** para ejecutar automáticamente **pruebas de API** durante el desarrollo y el despliegue.',
    ],
    directionFile: '',
    relatedTechnologies: ['OAuth', 'JWT', 'APIs RESTful', 'GraphQL', 'Cookies', 'CI/CD'],
  },
];

export default skillsData;
