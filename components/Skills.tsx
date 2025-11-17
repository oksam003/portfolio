'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {

  const skills = [
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'React', level: 95, color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 75, color: 'from-blue-400 to-cyan-400' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-400' },
    { name: 'MongoDB', level: 70, color: 'from-green-400 to-emerald-400' },
    { name: 'PostgreSQL', level: 75, color: 'from-blue-500 to-indigo-500' },
  ]

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS',
    'GraphQL', 'REST APIs', 'Framer Motion', 'Three.js'
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Technologies I work with to bring ideas to life
          </p>

          {/* Skill bars */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-effect rounded-lg p-6"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm font-medium hover:border-cyan-400 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

