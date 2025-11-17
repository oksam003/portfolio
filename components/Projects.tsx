'use client'

import { motion } from 'framer-motion'

const Projects = () => {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      image: '🛒',
      gradient: 'from-cyan-500 to-blue-600',
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      image: '📋',
      gradient: 'from-purple-500 to-pink-600',
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌤️',
      gradient: 'from-blue-500 to-cyan-600',
      link: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics with data visualization and insights.',
      technologies: ['React', 'Python', 'Chart.js', 'REST API'],
      image: '📊',
      gradient: 'from-green-500 to-emerald-600',
      link: '#',
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by AI with natural language processing capabilities.',
      technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
      image: '🤖',
      gradient: 'from-purple-500 to-indigo-600',
      link: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
      image: '💪',
      gradient: 'from-cyan-500 to-teal-600',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            A collection of projects I've built with passion and precision
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-lg p-6 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {project.image}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

