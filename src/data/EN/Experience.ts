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
      'Developer Frontend Middle (ReactJS, TailwindCSS, Typescript, Redux, RxJS, Firebase)',
    date: 'Feb 2024 - Nov 2024',
    description: [
      'In my role, I focused on developing **interfaces** and **functionalities** (UI/UX) in close collaboration with **UI designers** and the **backend team**. This joint effort ensured the **visual** and **functional alignment** of interfaces, providing an optimal **user experience** while maintaining **project standards**.',
      'I managed tasks assigned through **Jira** and maintained consistent communication via **Slack**. This was essential for effective team coordination, timely feedback, and alignment with the **SCRUM methodology** throughout each development phase.',
      'Within the project, I consumed both **internal** and **external services** provided by the development team. Integrating the **ChatGPT API** was particularly important to meet the clients',
      'requirements. Additionally, I used **Firebase** for basic authentication, ensuring **user security** and accessibility within the development environment.',
      'To ensure a smooth and standardized workflow, I utilized tools such as **Biome**, **Eslint**, **Prettier**, and **CSPell**, which helped maintain **code quality** and **consistency**. For version control, I employed **Git**, **Git Flow**, and **GitHub Actions**, supporting team collaboration and well-organized releases.',
      'Additionally, I was part of the **DevOps team**, contributing to the projects **production deployment** through **cloud services**. This process was tailored to align with the client’s **budget** and operational requirements, ensuring **system reliability** and **scalability**.',
    ],
  },
  {
    id: '2',
    title: 'Investac SAC',
    position: 'Developer Backend',
    title_des:
      'Developer Backend (NodeJS, NestJS, Typescript, Express, TypeGraphql, Graphql, RestFul API, Oracle)',
    date: 'Nov 2022 – Ene 2024',
    description: [
      'In my role as a **backend developer**, I used technologies such as **Node.js**, **TypeScript**, **NestJS**, **TypeGraphQL**, **GraphQL**, **RESTful**, and **Oracle**, applying a **layered architecture**. These tools enabled me to build **scalable** and **robust solutions**.',
      'To ensure **code quality** in both production and development, I used **Jest** and other tools previously mentioned. I was responsible for creating essential **services** and **endpoints** for the frontend, maintaining constant communication with the **interface team**.',
      'I used tools like **Slack**, **Jira**, and **Notion** to organize and manage the team, supporting an efficient and collaborative workflow.',
      'Additionally, I developed new **business logic** tailored to **client needs** and project goals.',
    ],
  },
  {
    id: '3',
    title: 'Exponentia SAC',
    position: 'Developer Full Stack',
    title_des: 'Typescript Developer (ReactJS, NodeJS, Typescript, Jest, PostgresSQL)',
    date: 'Dic 2021 – Oct 2022',
    description: [
      'In my role as a **full stack developer** with **TypeScript**, I used communication tools like **Slack**, **Jira**, and **Notion**, along with familiar development tools. In terms of technologies, I worked with **ReactJS**, **Node.js**, **Express**, **Redux**, **TypeScript**, **RESTful API**, and **Jest**.',
      'My primary responsibility was to maintain an already developed project, resolving **bugs** and **errors**, as well as implementing new **business logic** when needed. This required adjustments on both the **backend** and **frontend**.',
      'I attended regular meetings where the project senior assigned new **tasks**, keeping a structured workflow aligned with project requirements.',
    ],
  },
  {
    id: '4',
    title: 'Trainee Java',
    title_des: 'Java Developer Junior (Angular, Java, Spring, SpringBoot, SpringSecurity, MYSQL)',
    date: 'Abr 2021 – Set 2021',
    position: 'Developer FrontEnd',
    description: [
      'As a **junior developer** in **Java**, I worked on a project built from scratch using **Java**, **Spring**, **Spring Boot**, **Spring Security**, **MySQL**, and **Angular**. My main focus was on **backend tasks**, creating **server logic** and **services**, but I was also responsible for **frontend work** in **Angular**, specifically for building interfaces.',
      'As a junior, I received small assignments under the supervision of the project senior, which allowed me to gain valuable experience in **server development** and **production deployment**.',
      'In this project, we used tools such as **Slack**, **Jira**, **Eslint**, **Prettier**, **Git**, **Git Flow**, **GitHub**, and **GitHub Actions** for **version control** and team organization, ensuring a collaborative and standardized development process.',
    ],
  },
  {
    id: '5',
    title: 'Trainee C#',
    position: 'C# Developer',
    title_des: 'C# Developer Junior (ASP.NET Core, .NET, MVC, Blazor, SQL Server)',
    date: 'Mar 2020 - Nov 2020',
    description: [
      'As an intern, I worked on small projects developed with **C#**, using technologies such as **.NET**, **ASP.NET Core**, **MVC**, **Blazor**, and **SQL Server**. My role involved supporting the development of both **web** and **desktop projects**, primarily focusing on the **backend**.',
      'My responsibilities included creating new **services** and resolving **bugs** and **errors** in the projects assigned to me, which I received daily or weekly. We used **Git** and **GitHub** for **version control**, and tools like **Slack** and **Teams** for communication with the team.',
      'During this experience, I had the opportunity to learn about **DevOps** and **QA**, as the company was strongly focused on these areas for **enterprise-level projects**. This allowed me to gain key insights into these processes.',
      'What I appreciated most was the knowledge I gained as a **backend developer**, particularly due to the great team I worked with and the excellent communication between the **backend**, **DevOps**, and **QA teams**.',
    ],
  },
  {
    id: '6',
    title: 'Trainee (HTML, CSS, JS, Git)',
    position: 'Developer Vanilla JS',
    title_des: 'Developer Templates Pages (HTML, CSS, JS, Git, Github)',
    date: 'Jun 2019 - Nov 2019',
    description: [
      'As an intern in **template development**, I was responsible for creating **blogs**, portfolios, and **static websites** using technologies such as **HTML**, **CSS**, and **vanilla JavaScript**. I worked alongside a **UI/UX partner**, who would send me the interfaces, and I would develop them based on the designs.',
      'We used **Git** and **GitHub** for **version control**, and tools like **Figma** and **Jira** for work management and team communication. What motivated me most about this experience was the creativity we had in creating amazing **websites**, with a focus on both **aesthetics** and **functionality**.',
      'Additionally, I had the opportunity to learn about **CSS frameworks** like **TailwindCSS** and **SASS** as a preprocessor, which significantly improved my **frontend development** skills. This experience allowed me to dive deeper into **web interface design** and development.',
      'What I enjoyed most was the chance to work on visually appealing projects and learn new tools and techniques that enriched my growth as a **frontend developer**.',
    ],
  },
];

export default ExperienceList;
