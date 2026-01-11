export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ContactData {
  title: string;
  intro: string;
  links: ContactLink[];
}
