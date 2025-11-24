import type { ServiceDetail } from '../types/serviceDetail'

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    icon: '🚀',
    tagline: 'Building modern, scalable web applications that drive business growth',
    description:
      'Our web development services combine cutting-edge technologies with proven methodologies to create powerful, user-friendly websites and web applications. From simple landing pages to complex enterprise solutions, we deliver digital experiences that engage users and achieve business objectives.',
    features: [
      'Custom Website Design & Development',
      'Progressive Web Applications (PWA)',
      'Single Page Applications (SPA)',
      'Content Management Systems',
      'E-commerce Platforms',
      'Enterprise Web Solutions',
      'Web Portal Development',
      'Legacy System Modernization'
    ],
    technologies: [
      {
        name: 'Vue.js',
        category: 'Frontend',
        description: 'Progressive framework for building modern user interfaces',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
      },
      {
        name: 'React',
        category: 'Frontend',
        description: 'Component-based library for building interactive UIs',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        description: 'Type-safe JavaScript for scalable applications',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
        name: 'HTML5/CSS3',
        category: 'Frontend',
        description: 'Modern web standards for semantic markup and styling',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        description: 'Utility-first CSS framework for rapid UI development',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'Sass/SCSS',
        category: 'Frontend',
        description: 'CSS preprocessor with powerful features and mixins',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
      },
      {
        name: 'Node.js',
        category: 'Backend',
        description: 'JavaScript runtime for building scalable server applications',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'ASP.NET Core',
        category: 'Backend',
        description: 'High-performance framework for building modern web apps',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
      },
      {
        name: 'Express.js',
        category: 'Backend',
        description: 'Fast, minimalist web framework for Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      },
      {
        name: 'Python/Django',
        category: 'Backend',
        description: 'High-level Python framework for rapid development',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        description: 'RESTful API design and implementation',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
      },
      {
        name: 'GraphQL',
        category: 'Backend',
        description: 'Modern API query language for efficient data fetching',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        description: 'Powerful open-source relational database',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        name: 'MongoDB',
        category: 'Database',
        description: 'Flexible NoSQL database for modern applications',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'MySQL',
        category: 'Database',
        description: 'Reliable relational database management system',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      {
        name: 'Git',
        category: 'Tools',
        description: 'Version control for tracking code changes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      {
        name: 'Docker',
        category: 'Tools',
        description: 'Containerization for consistent deployment environments',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: 'Webpack',
        category: 'Tools',
        description: 'Module bundler for optimizing application assets',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
      },
      {
        name: 'Vite',
        category: 'Tools',
        description: 'Next-generation frontend tooling for lightning-fast development',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
      },
      {
        name: 'Jest',
        category: 'Tools',
        description: 'Delightful JavaScript testing framework',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
      },
      {
        name: 'ESLint',
        category: 'Tools',
        description: 'Code linting for maintaining quality standards',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg'
      },
      {
        name: 'AWS',
        category: 'Cloud',
        description: 'Cloud infrastructure and services from Amazon',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
        name: 'Azure',
        category: 'Cloud',
        description: 'Microsoft cloud platform for scalable solutions',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
      },
      {
        name: 'Netlify',
        category: 'Cloud',
        description: 'Modern web hosting with continuous deployment',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg'
      }
    ],
    caseStudies: [
      {
        title: 'Enterprise Dashboard Transformation',
        client: 'TechStart Inc',
        challenge:
          'TechStart needed a complete overhaul of their legacy dashboard system that was slow, difficult to maintain, and lacked mobile responsiveness.',
        solution:
          'We built a modern Vue.js application with TypeScript, implementing a component-based architecture with real-time data visualization, progressive enhancement, and mobile-first design.',
        results: [
          '70% reduction in page load times',
          '95% improvement in mobile user experience scores',
          '50% decrease in maintenance costs',
          '300% increase in user engagement'
        ]
      },
      {
        title: 'Multi-tenant SaaS Platform',
        client: 'CloudFlow Solutions',
        challenge:
          'CloudFlow required a scalable SaaS platform to serve multiple enterprise clients with customizable features and white-label capabilities.',
        solution:
          'Built a robust multi-tenant architecture using React and Node.js with PostgreSQL, implementing role-based access control, custom theming, and modular plugin system.',
        results: [
          'Successfully onboarded 50+ enterprise clients',
          '99.9% uptime maintained',
          'Reduced onboarding time from weeks to hours',
          'Scaled to handle 100K+ concurrent users'
        ]
      }
    ],
    benefits: [
      'Responsive, mobile-first design that works on all devices',
      'SEO-optimized architecture for better search visibility',
      'Fast loading times and optimal performance',
      'Scalable solutions that grow with your business',
      'Security best practices and regular updates',
      'Ongoing maintenance and support'
    ]
  }
}
