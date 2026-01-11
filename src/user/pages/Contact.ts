import type { ContactData } from '@/pages/Contact.schema';

export const contactData: ContactData = {
  title: 'Contact Me',
  intro: 'Feel free to reach out to me via email or connect on social media!',
  links: [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'yourprofile',
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      label: 'GitHub',
      value: 'yourusername',
      href: 'https://github.com/yourusername',
    },
  ],
};
