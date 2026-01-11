export interface UserProfile {
  name: string;
  role: string;
  tagline?: string;

  contact?: {
    email?: string;
    location?: string;
  };

  socials?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };

  resume?: {
    yearsOfExperience?: number;
    currentCompany?: string;
    openToWork?: boolean;
  };
}

export const profile: UserProfile = {
  name: 'Βίσων',
  role: 'Distributed Systems Engineer',
  tagline: 'I build things that occasionally work.',

  contact: {
    email: 'you@example.com',
    location: 'Stockholm, SE',
  },

  socials: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
  },

  resume: {
    yearsOfExperience: 2,
    openToWork: true,
  },
};
