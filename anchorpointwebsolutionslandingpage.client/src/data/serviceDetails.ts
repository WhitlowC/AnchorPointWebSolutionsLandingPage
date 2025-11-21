import type { ServiceDetail } from '../types/serviceDetail'

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    icon: '🚀',
    tagline: 'Building modern, scalable web applications that drive business growth',
    description: 'Our web development services combine cutting-edge technologies with proven methodologies to create powerful, user-friendly websites and web applications. From simple landing pages to complex enterprise solutions, we deliver digital experiences that engage users and achieve business objectives.',
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
      'Vue.js',
      'React',
      'TypeScript',
      'Node.js',
      'ASP.NET Core',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Webpack/Vite'
    ],
    caseStudies: [
      {
        title: 'Enterprise Dashboard Transformation',
        client: 'TechStart Inc',
        challenge: 'TechStart needed a complete overhaul of their legacy dashboard system that was slow, difficult to maintain, and lacked mobile responsiveness.',
        solution: 'We built a modern Vue.js application with TypeScript, implementing a component-based architecture with real-time data visualization, progressive enhancement, and mobile-first design.',
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
        challenge: 'CloudFlow required a scalable SaaS platform to serve multiple enterprise clients with customizable features and white-label capabilities.',
        solution: 'Built a robust multi-tenant architecture using React and Node.js with PostgreSQL, implementing role-based access control, custom theming, and modular plugin system.',
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
