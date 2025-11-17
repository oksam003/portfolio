'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Software Developer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = isDeleting ? displayText.length - 1 : displayText.length + 1
      const textToDisplay = fullText.substring(0, currentIndex)

      setDisplayText(textToDisplay)

      if (!isDeleting && textToDisplay === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
        setTypingSpeed(100)
      } else if (isDeleting && textToDisplay === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-black/40 text-xs uppercase tracking-[0.3em] text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Hi, I&rsquo;m a
              </span>
              <br />
              <span className="text-cyan-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 md:text-gray-400 max-w-xl md:max-w-none mx-auto md:mx-0"
            >
              Crafting immersive digital experiences with clean code, thoughtful design,
              and a relentless drive for innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8 text-left"
            >
              <div className="glass-effect rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-gray-400">Experience</p>
                <p className="text-lg font-semibold text-cyan-300">3+ Years</p>
              </div>
              <div className="glass-effect rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-gray-400">Projects</p>
                <p className="text-lg font-semibold text-cyan-300">30+ Delivered</p>
              </div>
              <div className="glass-effect rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-gray-400">Location</p>
                <p className="text-lg font-semibold text-cyan-300">Remote Global</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-500/40 via-purple-500/20 to-blue-500/40 blur-2xl" />
              <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 opacity-40 animate-glow" />
              <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-cyan-500/40 bg-black/60 backdrop-blur">
                <Image
                  src="/images/developer.jpg"
                  alt="Portrait of the developer"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 glass-effect px-6 py-3 rounded-full text-sm text-cyan-200 border border-cyan-500/40">
                Love & Hustle 
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000
            const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: Math.random(),
                }}
                animate={{
                  y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : randomY],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            )
          })}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

