'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I&rsquo;m a passionate software developer with a love for creating elegant solutions
                to complex problems. My journey in tech has been driven by curiosity and a
                desire to build things that make a difference.
              </p>
              <p>
                I specialize in modern web technologies and enjoy working with cutting-edge
                frameworks and tools. When I&rsquo;m not coding, you&rsquo;ll find me exploring new
                technologies, contributing to open-source projects, or sharing knowledge
                with the developer community.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best practices
                to deliver high-quality software that stands the test of time.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="glass-effect rounded-lg p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-cyan-400 font-bold text-xl">3+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-purple-400 font-bold text-xl">30+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Technologies</span>
                  <span className="text-blue-400 font-bold text-xl">20+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Happy Clients</span>
                  <span className="text-green-400 font-bold text-xl">10+</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

