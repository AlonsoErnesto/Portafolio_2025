interface Skills {
  id: string;
  title: string;
  language?: string;
  icon: string;
  description: string[];
  directionFile?: string;
  relatedTechnologies: string[];
}

const SkillList: Skills[] = [
  {
    id: '1',
    title: 'HTML5',
    language: 'html',
    icon: 'uil:html5',
    description: [
      '**HTML5** es el bloque fundamental de la **web**, permitiendo la creación de páginas **estructuradas** y **accesibles**.',
      'Con más de tres años de experiencia trabajando con **HTML**, tengo un profundo entendimiento de su **sintaxis** y capacidades.',
      'He utilizado **HTML5** en varios proyectos, optimizando la **estructura** y el **rendimiento** de aplicaciones web.',
    ],
    directionFile: '../public/snippets/html.html',
    relatedTechnologies: ['SVG', 'ARIA', 'Web Components'],
  },
  {
    id: '2',
    title: 'CSS',
    language: 'css',
    icon: 'flowbite:css-solid',
    description: [
      '**CSS** es el lenguaje que da estilo a las **páginas web**, controlando el **diseño**, **maquetación** y **responsividad**.',
      'Con más de tres años de experiencia utilizando **CSS**, he desarrollado una gran comprensión de sus **capacidades**.',
      'He utilizado **CSS** en varios proyectos, optimizando las **interfaces de usuario** y asegurando diseños **responsivos** y limpios.',
    ],
    directionFile: '../public/snippets/css.css',
    relatedTechnologies: ['SASS', 'LESS', 'TailwindCSS', 'Bootstrap'],
  },
  {
    id: '3',
    title: 'JavaScript',
    icon: 'cib:javascript',
    language: 'javascript',
    description: [
      '**JavaScript** es un lenguaje **versátil** utilizado para crear páginas web **dinámicas** e **interactivas**.',
      'Con más de tres años de experiencia en **JavaScript**, tengo una comprensión sólida tanto de su **sintaxis** como de conceptos avanzados.',
      'He utilizado **JavaScript** extensamente en **desarrollo front-end** y **back-end**, optimizando el **rendimiento** y mejorando la **interactividad del usuario**.',
    ],
    directionFile: '../public/snippets/javascript.js',
    relatedTechnologies: ['jQuery', 'D3.js', 'Chart.js', 'WebSockets'],
  },
  {
    id: '4',
    title: 'TypeScript',
    language: 'typescript',
    icon: 'akar-icons:typescript-fill',
    description: [
      '**TypeScript** es un **superconjunto de JavaScript** que añade **tipos estáticos**, mejorando la **calidad del código** y la **mantenibilidad**.',
      'Con más de tres años de experiencia usando **TypeScript**, tengo una comprensión sólida de su **sistema de tipos** y características avanzadas.',
      'He utilizado **TypeScript** para construir **aplicaciones escalables**, mejorando la **productividad del desarrollador** y minimizando los **errores en tiempo de ejecución**.',
    ]
    ,
    directionFile: '../public/snippets/typescript.ts',
    relatedTechnologies: ['TSlint', 'NestJS', 'Angular', 'RxJS'],
  },
  {
    id: '5',
    title: 'ReactJS',
    language: 'tsx',
    icon: 'grommet-icons:reactjs',
    description: [
      '**ReactJS** es una popular **biblioteca de JavaScript** para construir **interfaces de usuario**, especialmente **aplicaciones de una sola página**.',
      'Con más de tres años de experiencia en **ReactJS**, he desarrollado una comprensión sólida de su **arquitectura basada en componentes** y **gestión del estado**.',
      'He utilizado **ReactJS** para crear **aplicaciones dinámicas** y **responsivas**, aprovechando **hooks**, **contexto** y **Redux** para la gestión del estado.',
    ]
    ,
    directionFile: '../public/snippets/reactjs.tsx',
    relatedTechnologies: ['Next.js', 'Redux', 'React Router', 'Material-UI'],
  },
  {
    id: '6',
    title: 'Angular',
    icon: 'mdi:angular',
    language: 'angular-ts',
    description: [
      '**Angular** es una plataforma para construir **aplicaciones web dinámicas** y **de una sola página** utilizando **TypeScript**.',
      'Con más de tres años de experiencia en **Angular**, tengo una comprensión sólida de su **framework**, **componentes** y **servicios**.',
      'He utilizado **Angular** para construir **aplicaciones escalables**, aprovechando su poderoso **CLI**, **vinculación bidireccional de datos** y **RxJS** para programación reactiva.',
    ]
    ,
    directionFile: '../public/snippets/angular.ts',
    relatedTechnologies: ['Ionic', 'NgRx', 'Angular Material', 'PrimeNG'],
  },
  {
    id: '7',
    title: 'C#',
    language: 'csharp',
    icon: 'devicon-plain:csharp',
    description: [
      '**C#** es un lenguaje de programación **versátil** y **orientado a objetos** desarrollado por **Microsoft**, principalmente para construir **aplicaciones .NET**.',
      'Con más de tres años de experiencia en **C#**, he desarrollado una comprensión sólida de los **principios de la programación orientada a objetos** y el **framework .NET**.',
      'He utilizado **C#** para construir **aplicaciones web**, **aplicaciones de escritorio** y **servicios backend**, asegurando la **escalabilidad** y el **rendimiento**.',
    ]
    ,
    directionFile: '../public/snippets/csharp.cs',
    relatedTechnologies: ['ASP.NET', 'Entity Framework', 'Xamarin', 'Blazor'],
  },
  {
    id: '8',
    title: 'Java',
    icon: 'fontisto:java',
    language: 'java',
    description: [
      '**Java** es un lenguaje de programación **orientado a objetos** ampliamente utilizado, conocido por su **portabilidad** entre plataformas.',
      'Con más de tres años de experiencia en **Java**, tengo una comprensión sólida de los **conceptos clave** como **OOP**, **multihilo** y la **JVM**.',
      'He utilizado **Java** para construir **aplicaciones a nivel empresarial**, enfocándome en la **escalabilidad**, el **rendimiento** y la **mantenibilidad**.',
    ]
    ,
    directionFile: '../public/snippets/java.java',
    relatedTechnologies: ['Spring', 'Hibernate', 'Kotlin', 'JUnit'],
  },
  {
    id: '9',
    title: 'Node.js',
    language: 'ts',
    icon: 'ri:nodejs-fill',
    description: [
      '**Node.js** es un **entorno de ejecución de JavaScript** basado en el **motor V8 de Chrome**, utilizado para construir **aplicaciones del lado del servidor escalables**.',
      'Con más de tres años de experiencia en **Node.js**, tengo una comprensión profunda de la **programación asíncrona** y la **arquitectura orientada a eventos**.',
      'He utilizado **Node.js** para construir **APIs**, **aplicaciones en tiempo real** y **microservicios**, enfocándome en el **rendimiento** y la **escalabilidad**.',
    ]
    ,
    directionFile: '../public/snippets/node.ts',
    relatedTechnologies: ['Express', 'NestJS', 'MongoDB', 'Socket.IO'],
  },
  {
    id: '10',
    title: 'Express',
    icon: 'simple-icons:express',
    language: 'ts',
    description: [
      '**Express** es un framework **mínimo** y **flexible** de Node.js para aplicaciones web, utilizado para construir **APIs** y **aplicaciones del lado del servidor**.',
      'Con más de tres años de experiencia en **Express**, tengo una comprensión sólida de **enrutamiento**, **middleware** y **manejo de solicitudes**.',
      'He utilizado **Express** para construir **APIs RESTful** y **microservicios**, enfocándome en el **rendimiento**, la **seguridad** y la **escalabilidad**.',
    ]
    ,
    directionFile: '../public/snippets/express.ts',
    relatedTechnologies: ['Node.js', 'JWT', 'Sequelize', 'MongoDB'],
  },
  {
    id: '11',
    title: 'NestJS',
    language: 'ts',
    icon: 'simple-icons:nestjs',
    description: [
      '**NestJS** es un **framework progresivo de Node.js** para construir **aplicaciones del lado del servidor** **eficientes**, **fiables** y **escalables**.',
      'Con más de tres años de experiencia en **NestJS**, tengo una comprensión sólida de su **arquitectura**, **decoradores** y **sistema de módulos**.',
      'He utilizado **NestJS** para construir **aplicaciones a nivel empresarial**, integrándome con **bases de datos**, **microservicios** y **APIs externas**.',
    ]
    ,
    directionFile: '../public/snippets/nest.ts',
    relatedTechnologies: ['TypeScript', 'GraphQL', 'RxJS', 'PostgreSQL'],
  },
  {
    id: '12',
    title: 'GraphQL',
    language: 'graphql',
    icon: 'mdi:graphql',
    description: [
      '**GraphQL** es un **lenguaje de consultas para APIs** y un **entorno de ejecución** para ejecutar esas consultas con tus **datos**.',
      'Con más de tres años de experiencia en **GraphQL**, tengo una comprensión profunda de su **esquema**, **resolutores** y **ejecución de consultas**.',
      'He utilizado **GraphQL** para crear **APIs eficientes** y **flexibles**, integrándome con **múltiples fuentes de datos** y optimizando la **comunicación cliente-servidor**.',
    ]
    ,
    directionFile: '../public/snippets/graphql.gql',
    relatedTechnologies: [
      'Apollo Server',
      'TypeGraphQL',
      'Prisma',
      'REST APIs',
    ],
  },
  {
    id: '13',
    title: 'Oracle',
    language: 'sql',
    icon: 'simple-icons:oracle',
    description: [
      '**Oracle** es un **sistema de gestión de bases de datos relacional** potente utilizado para gestionar **bases de datos de gran escala**.',
      'Con más de tres años de experiencia en **Oracle**, tengo una comprensión sólida de **consultas SQL**, **optimización** y **gestión de bases de datos**.',
      'He utilizado **Oracle** para diseñar y gestionar **bases de datos complejas**, asegurando la **integridad de los datos**, la **seguridad** y una **consulta eficiente**.',
    ]
    ,
    directionFile: '../public/snippets/oracle.sql',
    relatedTechnologies: ['PL/SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: '14',
    title: 'Firebase',
    language: 'ts',
    icon: 'mdi:firebase',
    description: [
      '**Firebase** es una plataforma para construir **aplicaciones móviles** y **web**, proporcionando herramientas para **bases de datos**, **autenticación** y **hosting**.',
      'Con más de tres años de experiencia en **Firebase**, he integrado sus servicios para **autenticación**, **bases de datos en tiempo real** y **funciones en la nube**.',
      'He utilizado **Firebase** para construir **aplicaciones escalables**, enfocándome en **experiencias de usuario sin interrupciones** y **sincronización de datos en tiempo real**.',
    ]
    ,
    directionFile: '../public/snippets/firebase.ts',
    relatedTechnologies: ['Firestore', 'Auth0', 'AWS Amplify', 'ReactJS'],
  },
  {
    id: '15',
    title: 'GitHub Actions',
    icon: 'hugeicons:github',
    language: 'yaml',
    description: [
      '**GitHub Actions** es una plataforma de **CI/CD** para automatizar flujos de trabajo y gestionar **despliegues** directamente dentro de los repositorios de GitHub.',
      'Con más de **tres años de experiencia** utilizando **GitHub Actions**, he automatizado eficientemente los procesos de **compilación**, **pruebas** y **despliegue**.',
      'He utilizado **GitHub Actions** para agilizar las **tuberías CI/CD**, integrándome con varios **servicios en la nube** y asegurando un **despliegue constante de aplicaciones**.',
    ]
    ,
    directionFile: '../public/snippets/githubactions.yml',
    relatedTechnologies: ['Docker', 'Terraform', 'AWS', 'Jenkins'],
  },
  {
    id: '16',
    title: 'AWS',
    language: 'yaml',
    icon: 'mdi:aws',
    description: [
      'Amazon **Web Services** (**AWS**) es una plataforma integral de **computación en la nube** que ofrece diversos servicios para **computación**, **almacenamiento** y **bases de datos**.',
      'Con más de **tres años de experiencia** en **AWS**, he trabajado con servicios como **EC2**, **S3**, **Lambda** y **DynamoDB**.',
      'He utilizado **AWS** para **desplegar aplicaciones**, gestionar **infraestructura en la nube** y **optimizar recursos** para escalabilidad y **eficiencia en costos**.',
    ]
    ,
    directionFile: '',
    relatedTechnologies: [
      'CloudFormation',
      'Docker',
      'Terraform',
      'GitHub Actions',
    ],
  },
  {
    id: '17',
    title: 'Git',
    icon: 'fe:git',
    description: [
      '**Git** es un sistema distribuido de **control de versiones** utilizado para rastrear cambios en el **código fuente** durante el **desarrollo de software**.',
      'Con más de **tres años de experiencia** en **Git**, soy competente en gestionar **ramas**, **fusiones** y resolver **conflictos**.',
      'He utilizado **Git** para **control de versiones**, colaborar con equipos y gestionar **repositorios de código** de manera eficiente en proyectos tanto personales como profesionales.',
    ]
    ,
    directionFile: '',
    relatedTechnologies: ['GitHub', 'GitLab', 'GitFlow'],
  },
  {
    id: '18',
    title: 'Linux',
    icon: 'uiw:linux',
    description: [
      '**Linux** es un **sistema operativo de código abierto** que proporciona una plataforma estable, segura y flexible para los desarrolladores.',
      'Con más de **tres años de experiencia** en **Linux**, soy competente en usar su **shell**, gestionar **paquetes** y optimizar sistemas.',
      'He utilizado **Linux** para **desarrollo**, **administración de servidores** y automatización de tareas mediante **scripts de shell** y **trabajos cron**.',
    ],
    directionFile: '',
    relatedTechnologies: ['Bash', 'SSH', 'Docker', 'Systemd'],
  },
  {
    id: '19',
    title: 'Software Architecture',
    icon: 'game-icons:house-keys',
    description: [
      '**La arquitectura de software** es el proceso de definir la **estructura**, los **componentes** y las **decisiones de diseño** de un **sistema de software**.',
      'Con más de **tres años de experiencia** en **arquitectura de software**, he diseñado sistemas **escalables**, **mantenibles** y **eficientes**.',
      'He aplicado principios de diseño como **SOLID** y patrones como **MVC** y **microservicios** para crear soluciones de software **robustas** y **modulares**.',
    ]
    ,
    directionFile: '',
    relatedTechnologies: [
      'SOLID',
      'MVC',
      'Microservices',
      'CQRS',
      'Event-Driven Design',
      'Clean Arquitecture',
    ],
  },
  {
    id: '20',
    title: 'NeoVim',
    icon: 'file-icons:macvim',
    description: [
      '**NeoVim** es un **editor de texto altamente extensible** que mejora **Vim** con características modernas y un rendimiento optimizado.',
      'Con más de **tres años de experiencia** usando **NeoVim**, he personalizado mi configuración con **plugins**, **mapeos de teclas** y **flujos de trabajo**.',
      'He utilizado **NeoVim** para una **edición de texto** eficiente, **programación** y **gestión de proyectos**, enfocándome en la **velocidad** y la **productividad**.',
    ]
    ,
    directionFile: '',
    relatedTechnologies: [
      'Vim',
      'Lua',
      'Tmux',
      'LSP (Language Server Protocol)',
      'Tree-sitter',
    ],
  },
  {
    id: '21',
    title: 'Visual Studio Code',
    icon: 'simple-icons:visualstudiocode',
    language: 'text',
    description: [
      '**Visual Studio Code** (VSCode) es un editor de código fuente ligero pero potente, ampliamente utilizado en el desarrollo de software debido a su **compatibilidad con lenguajes** y sus **extensiones**.',
      'Con más de **tres años de experiencia** usando **VSCode**, he optimizado mi flujo de trabajo con herramientas como **Prettier** para el formateo de código y **ESLint** para el análisis estático de **JavaScript** y **TypeScript**.',
      'He personalizado **VSCode** con extensiones avanzadas como **GitLens** para mejorar la integración con **Git**, **Debugger for Chrome** para depuración, y **Live Server** para previsualizar cambios en tiempo real.',
      'Además, he configurado **VSCode** para mejorar la productividad mediante accesos directos personalizados, temas oscuros para reducir la fatiga ocular y el uso de **fragmentos** para ahorrar tiempo en tareas repetitivas.',
    ]
    ,
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
    id: '22',
    title: 'API Testing Tools',
    icon: 'simple-icons:postman',
    language: 'json',
    description: [
      '**Las herramientas de prueba de API** son entornos utilizados para probar, depurar y gestionar **solicitudes** y **respuestas de API**.',
      'Con más de **tres años de experiencia** usando herramientas como **Postman** y **Hoppscotch**, he agilizado el proceso de prueba de **APIs RESTful**, manejando **tokens de autenticación** y probando **cookies** para una **comunicación segura**.',
      'He utilizado estas herramientas para automatizar pruebas, gestionar **colecciones de API** y realizar **pruebas de rendimiento** para asegurar que los **puntos finales** sean robustos y puedan manejar grandes volúmenes de solicitudes de manera eficiente.',
      'Además, he integrado estas herramientas con **pipelines CI/CD** para ejecutar automáticamente las **pruebas de API** durante el desarrollo y el despliegue.',
    ]
    ,
    directionFile: '',
    relatedTechnologies: [
      'OAuth',
      'JWT',
      'RESTful APIs',
      'GraphQL',
      'Cookies',
      'CI/CD',
    ],
  },
];

export default SkillList;
