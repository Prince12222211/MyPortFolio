import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import emojiPixel from '../../assets/pixel-emojis.jpg'
import jsonIcon from '../../assets/jsondb.jpg'
import morseIcon from '../../assets/morse-in-one.jpg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import taskImage from '../../assets/871bda872e968916ff02ae20757e478f.gif'
import fruitImage from '../../assets/303fff16bcb3b75de2881949fe2a9451c1fcc973.gif'
import gifImage from '../../assets/unnamed.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8"
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          <ProjectCard
            title="Task Manager"
            description="Task Manager is a simple, efficient, and user-friendly tool designed to help you stay organized and focused throughout your day. Whether you're managing personal goals or work-related tasks, this app lets you easily create, edit, and delete tasks, set deadlines, and assign priorities. With a clean interface and intuitive features, it helps boost productivity, reduce stress, and ensure you never miss a deadline. Stay in control and get things done—one task at a time! "
            image={taskImage}
            link="https://6808c5a8c0d9b4afe54b7ff3--endearing-platypus-484629.netlify.app/"
            delay={1}
          />
          <ProjectCard
            title="FruitMatchingGame"
            description="Fruit Matching Game is a fun, colorful, and engaging memory puzzle game where players flip over cards to find and match identical pairs of fruits. With vibrant fruit illustrations and smooth animations, the game provides a visually delightful experience for users of all ages. It’s designed to enhance memory, improve focus, and sharpen cognitive skills through playful challenges."
            image={fruitImage}
            link="https://singular-donut-b686e8.netlify.app/"
            delay={1.3}
          />
          <ProjectCard
            title="Random Gif Generator"
            description="Random GIF Generator is a fun and interactive tool that fetches and displays random GIFs from the internet based on keywords or completely at random. With just a click, users can explore endless funny, cute, trending, or surprising GIFs, making it perfect for entertainment, creativity, or simply brightening your day. Powered by dynamic APIs, the Random GIF Generator offers a fast, seamless, and exciting experience every time you use it! 🎞️✨😂"
            image={gifImage}
            link="http://680fc2443534570f8d8316d0--famous-sawine-929a57.netlify.app/"
            delay={1.6}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('projects')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
