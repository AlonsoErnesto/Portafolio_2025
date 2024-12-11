// @ts-nocheck
import { Component, signal, computed, effect } from '@angular/core';
import type { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  template: `
    <app-profile
      [name]="name()"
      [description]="description()"
      [technologies]="technologies()"
      (viewProjects)="navigateToProjects()"
    >
    </app-profile>
  `,
})
export class AboutMeComponent {
  name = signal('Ernesto Alonso');
  role = signal('Software Engineer');
  experience = signal(1);
  technologies = signal(['Angular', 'NgRx', 'Angular Material', 'Axios']);

  description = computed(
    () =>
      `I'm a ${this.role()} with ${this.experience()} year${
        this.experience() > 1 ? 's' : ''
      } of experience, passionate about modern technologies.`
  );

  constructor(private router: Router) {
    effect(() => {
      console.log(`Technologies updated: ${this.technologies()}`);
    });
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
