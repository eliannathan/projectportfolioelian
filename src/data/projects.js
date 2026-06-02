export const projects = [
  {
    slug: 'serai-ai-concierge-chatbot',
    title: 'Serai AI Concierge Chatbot',
    tagline:
      'A full-stack hotel concierge web app featuring an AI chatbot, multi-step booking flow, cart system, and Supabase backend.',
    description: `Serai is a full-stack hotel concierge web application built to demonstrate how AI can be embedded into a real hospitality workflow. Guests interact with an AI chatbot powered by the OpenAI API to ask questions, browse services, and receive personalized recommendations — all in natural language.

Behind the scenes, the app uses Supabase as the backend for real-time data, user sessions, and order management. The booking flow guides users through a multi-step process with a persistent cart system, keeping the experience smooth from browsing to checkout.

The frontend is built with React and Vite, deployed on Vercel with automatic CI/CD from the GitHub repository.`,
    features: [
      'AI chatbot powered by OpenAI API for natural language concierge interactions',
      'Multi-step booking flow with a persistent cart system',
      'Supabase backend for real-time data, authentication, and order management',
      'Responsive UI built with React and Vite',
      'Deployed on Vercel with CI/CD pipeline',
    ],
    tags: ['React', 'Vite', 'Supabase', 'OpenAI API', 'Vercel'],
    demo: 'https://serai-chatbot.vercel.app',
    github: 'https://github.com/eliannathan/serai-chatbot',
    screenshots: [
      '/screenshots/serai-1.png',
      '/screenshots/serai-2.png',
      '/screenshots/serai-3.png',
      '/screenshots/serai-4.png',
    ],
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
