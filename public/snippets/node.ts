// @ts-nocheck
import * as path from 'path';

interface PortfolioData {
  name: string;
  role: string;
  experience: number;
  technologies: string[];
}

class Portfolio {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  private getIntroduction(): string {
    const { name, role, experience } = this.data;
    return `Name: ${name}\nRole: ${role}\nExperience: ${experience} year${
      experience > 1 ? 's' : ''
    }`;
  }

  private getTechnologiesList(): string {
    return this.data.technologies.map((tech, index) => `${index + 1}. ${tech}`).join('\n');
  }

  private getFilePathExample(): string {
    return `Example File Path: ${path.resolve('.')}`;
  }

  public displayPortfolio(): string {
    return [
      '=== About Me ===',
      this.getIntroduction(),
      '\nTechnologies I Use:',
      this.getTechnologiesList(),
      '\nFile Path Example:',
      this.getFilePathExample(),
      '\nThank you for reviewing my profile!',
    ].join('\n');
  }
}

const myPortfolioData: PortfolioData = {
  name: 'Ernesto Alonso',
  role: 'Software Engineer',
  experience: 3,
  technologies: ['Node.js', 'Path', 'Nodemon', 'Express', 'REST APIs', 'TypeScript'],
};

const myPortfolio = new Portfolio(myPortfolioData);

if (require.main === module) {
  process.stdout.write(myPortfolio.displayPortfolio());
}
