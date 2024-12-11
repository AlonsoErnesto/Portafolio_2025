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
      'This project allowed me to deepen my **full-stack development** skills using modern technologies like **Next.js** for building fast and scalable interfaces and Appwrite for user and database management. **Hono** was key to building an efficient and lightweight **API.**',
      'The main purpose of the **Jira clone** is to replicate and understand how enterprise tools handle **team collaboration** and project management, applying **architectural patterns** similar to those used by large companies.',
      '**Developing** this project helped me improve my skills in **TailwindCSS** for responsive design and **Radix UI** to implement accessible and reusable components, **essential** in any professional application.',
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
      'The **Slack clone** focuses on **real-time** communication, using **Convex** as a reactive backend that facilitates instant data synchronization. This helped me understand how to **optimize architectures** for collaborative applications.',
      'This project brings technologies used in **enterprise messaging applications** to independent development, replicating key features like channel and user management.',
      'Using **Radix UI** and **TailwindCSS** allowed me to create a modern and accessible user experience, crucial skills in current **professional development.**',
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
      'This project focuses on **gamifying language learning**, using technologies like **Clerk** for user **authentication** and **Neon** for real-time database management. This reinforces my ability to build scalable and secure applications.',
      'The purpose of this clone is to explore how massive educational **platforms integrate payments** (Stripe) and manage complex data in their applications.',
      'Developing interfaces with **TailwindCSS** and **Radix UI** helped me consolidate essential skills for creating modern and **user-friendly** applications.',
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
      'This project allowed me to explore using **Fabric.js** for browser-based **graphic manipulation**, developing skills in interactive vector graphics and **real-time design customization.**',
      'The purpose of the **Canvas clone** is to bring collaborative design technology to independent projects, replicating tools like advanced content customization and **integrating AI services** via Replicate.',
      'Additionally, I integrated **Stripe** for monetization, deepening my understanding of secure payment implementation, a fundamental skill in **modern web applications.**',
      'Experience with **TailwindCSS** helped me design visually appealing interfaces, and **Next.js** facilitated efficient, client-optimized application development.',
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
      'This project focuses on replicating the key features of a massive **social network like Facebook**, allowing me to delve into the interaction between **frontend and backend** using **ReactJS and Node.js.**',
      'Through **MongoDB integration**, I enhanced my skills in designing and managing scalable and efficient databases to handle large volumes of user data.',
      'The purpose of this clone is to explore how social media platforms implement features like **dynamic feeds**, user management, and **real-time communication,** adapting them to a simpler and functional environment.',
      'This development was key to consolidating my knowledge of **RESTful** architectures and design patterns that enable **scaling web applications.**',
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
      'The **Twitter clone** allowed me to explore **real-time application** development using **Web Sockets** to implement dynamic data updates, such as **tweets** and **notifications.**',
      'Integrating technologies like **Pug** and **AJAX** improved my understanding of creating fast and optimized interfaces, while **MongoDB** facilitated efficient structured data storage.',
      'The purpose of this project is to understand how platforms like Twitter manage massive **real-time user interaction** and adapt it to a practical environment for studying **performance and scalability.**',
      'This development also strengthened my skills in **client-server communication**, essential for creating modern and reactive web applications.',
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
      'This project recreates key **functionalities of Discord**, such as **real-time** messaging and channel management, using modern technologies like **Web Sockets** for efficient bidirectional communication.',
      'The integration of **ReactJS and Redux** enabled effective global state management, optimizing data flow between components for a smooth **user experience.**',
      'Using **Node.js and MongoDB** in the **backend** allowed efficient handling of large volumes of user, message, and channel data, strengthening my skills in **building robust** and **scalable APIs.**',
      'The purpose of the project is to study how platforms like Discord offer **real-time communication** and hierarchical data structures, applying them to a simplified environment that **optimizes resources and performance.**',
      'The project also improved my ability to integrate **Axios** and other frontend tools with backend services, consolidating my profile as a **full-stack developer.**',
    ],
    imgSrc: [],
    href: 'https://github.com/AlonsoErnesto/Twitter-clone',
  },
];

export default ProyectList;
