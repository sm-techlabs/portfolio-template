import { contactData } from '@/user';

const Contact = () => {
  return (
    <main className="page-content">
      <h1>{contactData.title}</h1>
      <p>{contactData.intro}</p>

      <ul>
        {contactData.links.map((link) => (
          <li key={link.label}>
            {link.label}:{' '}
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contact;
