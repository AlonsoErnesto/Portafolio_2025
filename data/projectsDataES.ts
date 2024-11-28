interface Project {
  id: string;
  title: string;
  title_desc: string;
  techs: string[];
  description: string[];
  imgSrc?: string[];
  href?: string;
}

const projectsDataES: Project[] = [
  {
    id: '1',
    title: 'Jira Clone',
    title_desc: '[Built in 2024]',
    techs: ['NextJS, Hono, Appwrite, Tailwindcss, Radix UI'],
    description: [
      'Este proyecto me permitió profundizar en el desarrollo full-stack utilizando tecnologías modernas como Next.js para la creación de interfaces rápidas y escalables, y Appwrite para manejar la gestión de usuarios y base de datos. Hono fue clave para construir una API eficiente y ligera.',
      'La finalidad principal del clon de Jira es replicar y entender cómo herramientas empresariales manejan la colaboración en equipo y la gestión de proyectos, aplicando patrones arquitectónicos similares a los utilizados por grandes empresas.',
      'Desarrollar este proyecto me ayudó a mejorar mis habilidades en TailwindCSS para diseño responsivo y Radix UI para implementar componentes accesibles y reutilizables, esenciales en cualquier aplicación profesional.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Jira-clone-Full-Stack/refs/heads/main/public/images/image.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Jira-clone-Full-Stack',
  },
  {
    id: '2',
    title: 'Slack Clone',
    title_desc: '[Built in 2024]',
    techs: ['NextJS, Convex, Tailwindcss, Radix UI'],
    description: [
      'El clon de Slack se centra en la comunicación en tiempo real, utilizando Convex como backend reactivo que facilita sincronización instantánea de datos. Esto me permitió comprender cómo optimizar arquitecturas para aplicaciones colaborativas.',
      'Este proyecto busca acercar tecnologías utilizadas en aplicaciones de mensajería empresarial al ámbito de desarrollo independiente, replicando características clave como la gestión de canales y usuarios.',
      'El uso de Radix UI y TailwindCSS me permitió crear una experiencia de usuario moderna y accesible, habilidades clave en el desarrollo profesional actual.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Slack-Clone/refs/heads/main/public/images/captura.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Slack-Clone',
  },
  {
    id: '3',
    title: 'Duolingo Clone',
    title_desc: '[Built in 2024]',
    techs: ['NextJS, Tailwindcss, Radix UI, Clerk, Neon, Stripe'],
    description: [
      'Este proyecto se centra en la gamificación del aprendizaje de idiomas, utilizando tecnologías como Clerk para la autenticación de usuarios y Neon para la gestión de bases de datos en tiempo real. Esto refuerza mi habilidad para construir aplicaciones escalables y seguras.',
      'La finalidad de este clon es explorar cómo plataformas educativas masivas integran pagos (Stripe) y manejo de datos complejos en sus aplicaciones.',
      'El desarrollo de interfaces con TailwindCSS y Radix UI me ayudó a consolidar habilidades esenciales para la creación de aplicaciones modernas y amigables al usuario.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Duolingo-clone-WEB/refs/heads/main/public/images/capture.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Duolingo-clone-WEB',
  },
  {
    id: '4',
    title: 'Canvas Clone',
    title_desc: '[Built in 2023]',
    techs: ['NextJS, Fabricjs, TailwindCSS, Replicate, Stripe'],
    description: [
      'Este proyecto me permitió explorar el uso de Fabric.js para la manipulación gráfica en el navegador, desarrollando habilidades en el manejo de gráficos vectoriales interactivos y personalización de diseños en tiempo real.',
      'La finalidad del clon de Canvas es acercar la tecnología de diseño colaborativo a proyectos independientes, replicando herramientas como la personalización avanzada de contenido y la integración de servicios de inteligencia artificial mediante Replicate.',
      'Además, integré Stripe para la monetización, lo que me permitió profundizar en la implementación de pagos seguros, una habilidad fundamental en aplicaciones web modernas.',
      'La experiencia con TailwindCSS me ayudó a diseñar interfaces visualmente atractivas y Next.js facilitó el desarrollo de una aplicación eficiente y optimizada para el cliente.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Canvas-Clone-Nextjs/refs/heads/main/public/capture.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Canvas-Clone-Nextjs',
  },
  {
    id: '5',
    title: 'Facebook Clone',
    title_desc: '[Built in 2023]',
    techs: ['Reactjs, Javascript, Nodejs, MongoDB'],
    description: [
      'Este proyecto se enfoca en replicar las características clave de una red social masiva como Facebook, permitiéndome profundizar en la interacción entre frontend y backend utilizando ReactJS y Node.js.',
      'A través de la integración de MongoDB, mejoré mis habilidades en el diseño y manejo de bases de datos escalables y eficientes para gestionar grandes volúmenes de datos de usuarios.',
      'El propósito de este clon es explorar cómo plataformas de redes sociales implementan características como feeds dinámicos, gestión de usuarios y comunicación en tiempo real, adaptándolas a un entorno más sencillo y funcional.',
      'Este desarrollo fue clave para consolidar mi conocimiento en arquitecturas RESTful y patrones de diseño que permiten escalar aplicaciones web.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Facebook_clone_Frontend/refs/heads/main/public/images/test/image2.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Facebook_clone_Frontend',
  },

  {
    id: '6',
    title: 'Twitter Clone',
    title_desc: '[Built in 2023]',
    techs: ['Pug, Javascript, Nodejs, MongoDB, Ajax, Web Sockets'],
    description: [
      'El clon de Twitter me permitió explorar el desarrollo de aplicaciones en tiempo real mediante el uso de Web Sockets para implementar actualizaciones dinámicas de datos, como tweets y notificaciones.',
      'La integración de tecnologías como Pug y AJAX mejoró mi comprensión en la creación de interfaces rápidas y optimizadas, mientras que MongoDB facilitó el almacenamiento eficiente de datos estructurados.',
      'La finalidad de este proyecto es comprender cómo plataformas como Twitter gestionan la interacción masiva de usuarios en tiempo real y adaptarlo a un entorno práctico para estudiar rendimiento y escalabilidad.',
      'Este desarrollo también fortaleció mis habilidades en la comunicación cliente-servidor, esenciales para crear aplicaciones web modernas y reactivas.',
    ],
    imgSrc: [
      'https://raw.githubusercontent.com/AlonsoErnesto/Twitter-clone/refs/heads/main/public/images/presentation.png',
    ],
    href: 'https://github.com/AlonsoErnesto/Twitter-clone',
  },
  {
    id: '7',
    title: 'Discord Clone',
    title_desc: '[Built in 2022]',
    techs: ['Reactjs, Nodejs, MongoDB, Redux, Axios, Web Sockets'],
    description: [
      'Este proyecto recrea funcionalidades clave de Discord, como la mensajería en tiempo real y la gestión de canales, utilizando tecnologías modernas como Web Sockets para comunicación bidireccional eficiente.',
      'La integración de ReactJS y Redux permitió la gestión efectiva del estado global, optimizando el flujo de datos entre componentes para una experiencia de usuario fluida.',
      'El uso de Node.js y MongoDB en el backend permitió manejar eficientemente grandes volúmenes de datos de usuarios, mensajes y canales, fortaleciendo mis habilidades en la construcción de APIs robustas y escalables.',
      'La finalidad del proyecto es estudiar cómo plataformas como Discord ofrecen comunicación en tiempo real y estructura jerárquica de datos, aplicándolas a un entorno simplificado que optimiza recursos y rendimiento.',
      'El proyecto también mejoró mi capacidad para integrar Axios y otras herramientas de frontend con servicios backend, consolidando mi perfil como desarrollador full-stack.',
    ],
    imgSrc: [],
    href: 'https://github.com/AlonsoErnesto/Twitter-clone',
  },
];

export default projectsDataES;
