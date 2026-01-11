import type { ComponentType } from 'react';

export interface PageDefinition {
  id: string;
  path: string;
  label: string;
  component: ComponentType;
  nav?: boolean;
}

import { HomePage } from './Home/Home.page';
import { AboutPage } from './About/About.page';
import { ProjectsPage } from './Projects/Projects.page';
import { ContactPage } from './Contact/Contact.page';
import { ResumePage } from './Resume/Resume.page';

export const pages: PageDefinition[] = [
  HomePage,
  AboutPage,
  ProjectsPage,
  ResumePage,
  ContactPage,
];
