import { PersonStanding, FileCodeCorner, MailIcon } from 'lucide-react';
import type { HomeData } from '@/pages/Home.schema';

export const homeData: HomeData = {
  heading: "Hi, I'm Βίσων 🦬",
  subheading:
    'I enjoy building clean UIs and solving boring problems properly.',

  actions: [
    {
      label: 'About',
      route: '/about',
      icon: PersonStanding,
    },
    {
      label: 'Projects',
      route: '/projects',
      icon: FileCodeCorner,
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: MailIcon,
    },
  ],
};
