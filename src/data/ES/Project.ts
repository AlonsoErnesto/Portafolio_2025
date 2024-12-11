interface Project {
  id: string;
  title: string;
  title_desc: string;
  techs: string[];
  description: string[];
  imgSrc?: string[];
  href?: string;
}

const ProyectList: Project[] = [
  {
    id: '1',
    title: 'Jira Clone',
    title_desc: '[Built in 2024]',
    techs: ['NextJS, Hono, Appwrite, Tailwindcss, Radix UI'],
    description: [
      'Este proyecto me permitió profundizar en mis habilidades de **desarrollo full-stack** utilizando tecnologías modernas como **Next.js** para construir interfaces rápidas y escalables, y Appwrite para la gestión de usuarios y bases de datos. **Hono** fue clave para construir una **API** eficiente y ligera.',
      'El principal objetivo del **clon de Jira** es replicar y entender cómo las herramientas empresariales manejan la **colaboración en equipo** y la gestión de proyectos, aplicando **patrones arquitectónicos** similares a los utilizados por grandes empresas.',
      '**Desarrollar** este proyecto me ayudó a mejorar mis habilidades en **TailwindCSS** para diseño responsivo y **Radix UI** para implementar componentes accesibles y reutilizables, **esenciales** en cualquier aplicación profesional.',
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
      'El **clon de Slack** se centra en la comunicación **en tiempo real**, utilizando **Convex** como un backend reactivo que facilita la sincronización instantánea de datos. Esto me ayudó a entender cómo **optimizar arquitecturas** para aplicaciones colaborativas.',
      'Este proyecto incorpora tecnologías usadas en **aplicaciones de mensajería empresarial** al desarrollo independiente, replicando características clave como la gestión de canales y usuarios.',
      'Usar **Radix UI** y **TailwindCSS** me permitió crear una experiencia de usuario moderna y accesible, habilidades cruciales en el **desarrollo profesional actual.**',
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
      'Este proyecto se centra en la **gamificación del aprendizaje de idiomas**, utilizando tecnologías como **Clerk** para la **autenticación de usuarios** y **Neon** para la gestión de bases de datos en tiempo real. Esto refuerza mi capacidad para construir aplicaciones escalables y seguras.',
      'El propósito de este clon es explorar cómo las plataformas educativas masivas **integran pagos** (Stripe) y gestionan datos complejos en sus aplicaciones.',
      'Desarrollar interfaces con **TailwindCSS** y **Radix UI** me ayudó a consolidar habilidades esenciales para crear aplicaciones modernas y **amigables para los usuarios.**',
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
      'Este proyecto me permitió explorar el uso de **Fabric.js** para la **manipulación gráfica** en el navegador, desarrollando habilidades en gráficos vectoriales interactivos y **personalización de diseño en tiempo real.**',
      'El propósito del **clon de Canvas** es llevar la tecnología de diseño colaborativo a proyectos independientes, replicando herramientas como la personalización avanzada de contenido e **integrando servicios de IA** a través de Replicate.',
      'Además, integré **Stripe** para monetización, profundizando en mi comprensión de la implementación de pagos seguros, una habilidad fundamental en las **aplicaciones web modernas.**',
      'La experiencia con **TailwindCSS** me ayudó a diseñar interfaces visualmente atractivas, y **Next.js** facilitó el desarrollo eficiente de aplicaciones optimizadas para el cliente.',
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
      'Este proyecto se enfoca en replicar las características clave de una **red social masiva como Facebook**, permitiéndome profundizar en la interacción entre el **frontend y el backend** usando **ReactJS y Node.js.**',
      'A través de la **integración con MongoDB**, mejoré mis habilidades en el diseño y gestión de bases de datos escalables y eficientes para manejar grandes volúmenes de datos de usuarios.',
      'El propósito de este clon es explorar cómo las plataformas de redes sociales implementan funciones como **feeds dinámicos**, gestión de usuarios y **comunicación en tiempo real**, adaptándolas a un entorno más sencillo y funcional.',
      'Este desarrollo fue clave para consolidar mis conocimientos en arquitecturas **RESTful** y patrones de diseño que permiten **escalar aplicaciones web.**',
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
      'El **clon de Twitter** me permitió explorar el desarrollo de aplicaciones **en tiempo real** utilizando **Web Sockets** para implementar actualizaciones dinámicas de datos, como **tweets** y **notificaciones.**',
      'La integración de tecnologías como **Pug** y **AJAX** mejoró mi comprensión en la creación de interfaces rápidas y optimizadas, mientras que **MongoDB** facilitó el almacenamiento eficiente de datos estructurados.',
      'El propósito de este proyecto es entender cómo las plataformas como Twitter manejan la interacción masiva de usuarios **en tiempo real** y adaptarlo a un entorno práctico para estudiar **rendimiento y escalabilidad.**',
      'Este desarrollo también fortaleció mis habilidades en la comunicación **cliente-servidor**, esenciales para crear aplicaciones web modernas y reactivas.',
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
      'Este proyecto recrea las principales **funcionalidades de Discord**, como la mensajería **en tiempo real** y la gestión de canales, utilizando tecnologías modernas como **Web Sockets** para una comunicación bidireccional eficiente.',
      'La integración de **ReactJS y Redux** permitió una gestión global del estado efectiva, optimizando el flujo de datos entre componentes para una experiencia de usuario fluida.',
      'El uso de **Node.js y MongoDB** en el **backend** permitió manejar de manera eficiente grandes volúmenes de datos de usuarios, mensajes y canales, fortaleciendo mis habilidades para construir **APIs robustas** y escalables.',
      'El propósito del proyecto es estudiar cómo plataformas como Discord ofrecen comunicación **en tiempo real** y estructuras de datos jerárquicas, aplicándolas a un entorno simplificado que **optimiza recursos y rendimiento.**',
      'El proyecto también mejoró mi capacidad para integrar **Axios** y otras herramientas frontend con servicios backend, consolidando mi perfil como **desarrollador full-stack.**',
    ],
    imgSrc: [],
    href: 'https://github.com/AlonsoErnesto/Twitter-clone',
  },
];

export default ProyectList;
