import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Anjana Nawarathne's Portfolio",
  description: 'Portfolio showcasing my skills and projects.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: "I'm Anjana Nawarathne.",
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a passionate <strong className="text-stone-100">IT Undergraduate</strong> from the University of Sri Jayawardenapura,
        currently focused on mental health advocacy and technology innovation.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me writing poetry, exploring new technologies, and engaging in discussions
        about mental health and well-being.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: "I'm an aspiring mental health advocate and technology enthusiast with a strong commitment to improving mental health awareness and services through innovative solutions.",
  aboutItems: [
    {label: 'Location', text: 'Sri Lanka', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Sri Lankan', Icon: FlagIcon},
    {label: 'Interests', text: 'Mental Health, Technology, Poetry', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Sri Jayawardenapura', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'IT Undergraduate', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {name: 'English', level: 10},
      {name: 'Sinhala', level: 9},
    ],
  },
  {
    name: 'Technical Skills',
    skills: [
      {name: 'Java', level: 8},
      {name: 'JavaScript', level: 7},
      {name: 'React', level: 6},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI-Powered Depression Relief and Therapeutic App',
    description: 'AI-Based Emotional Support: A conversational AI chatbot capable of interacting in Sinhala, providing real-time emotional guidance, stress-relief advice, and empathy-driven support.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'A marketplace for foreign Sri Lankan people',
    description: 'Focus on the export and import industry, creating a website.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'University of Sri Jayawardenapura',
    title: 'Bachelor of Science in Information Technology',
    content: <p>Studying various aspects of information technology and software development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - October 2022',
    location: 'Unique International College',
    title: 'Admin Support',
    content: (
      <p>
        I worked in the front-end.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nathalie Devinka',
      text: 'Anjana has been a great team member, always bringing creativity and passion to our projects.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'anjana@example.com',
      href: 'mailto:anjana@example.com',
    },
    {
      type: ContactType.Location,
      text: 'Sri Lanka',
      href: 'https://www.google.com/maps',
    },
    {
      type: ContactType.Github,
      text: 'Anjanapramod',
      href: 'https://github.com/Anjanapramod',
    },
    {
      type: ContactType.LinkedIn,
      text: 'anjana-n-7b7347270',
      href: 'https://www.linkedin.com/in/anjana-n-7b7347270',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Anjanapramod'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anjana-n-7b7347270'},
];
