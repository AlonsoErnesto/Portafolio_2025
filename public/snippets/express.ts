// @ts-nocheck
import express, { type Application, type Request, type Response, NextFunction } from 'express';
import authenticateToken from '@middleware/jwt';

interface Profile {
  name: string;
  role: string;
  experience: number;
  technologies: string[];
}

class ProfileService {
  private profile: Profile;

  constructor() {
    this.profile = {
      name: 'Ernesto Alonso',
      role: 'Software Engineer',
      experience: 3,
      technologies: ['Express', 'TypeScript', 'JWT', 'REST APIs', 'Middleware'],
    };
  }

  getProfile(): Profile {
    return this.profile;
  }
}

class App {
  private app: Application;
  private profileService: ProfileService;

  constructor() {
    this.app = express();
    this.profileService = new ProfileService();
    this.initializeMiddleware();
    this.initializeRoutes();
  }

  private initializeMiddleware() {
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.get('/api/profile', authenticateToken, this.getProfileHandler.bind(this));
  }

  private getProfileHandler(req: Request, res: Response) {
    const profile = this.profileService.getProfile();
    res.json(profile);
  }

  public start() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  }
}

const app = new App();
app.start();
