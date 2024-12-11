interface Presentation {
  id: string;
  title: string;
  tag: string;
  title_desc: string;
  description: string[];
  href?: string[];
}

const PresentationList: Presentation[] = [
  {
    id: '1',
    title: `Software Developer (Perú)`,
    tag: `Hello, I am a full stack web developer with over 3 years of experience.`,
    title_desc: '[Built in 2024]',
    description: [
      'Hi, I am **Ernesto** **Alonso** \n A Systems Engineer focused on the **backend.**',
  'I am **passionate** about development, creating new projects using highly adaptable technologies to achieve the best performance. Although my main focus is on the **backend** , most of my professional experience has been as a **full-stack** **developer.** \n I also enjoy programming **applications** for **mobile** and **desktop,** and experimenting with **new** **technologies.**',
  'In my professional journey, I have had the opportunity to learn from **senior_developers**   , who inspire me to aspire to their level in the future. My first goal is to become a better **developer** by mastering the **technologies** I specialize in.',
  'Another major interest of mine is user **experience(UX)** design, which I like to approach broadly and not limit solely to **userInterfaces** .',
  'I am always looking for new **challenges** and **opportunities** to learn because I believe constant growth is essential in our profession.',
  'Click on a section on the top to learn more about my **work** and past **experiences.**',
    ],
    href: ['https://github.com/AlonsoErnesto','https://linkedin.com/in/devernesto','https://linktr.ee/ernesto_alonso']
  }]

  export default PresentationList;