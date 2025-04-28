import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import emojiPixel from '../../assets/pixel-emojis.jpg'
import jsonIcon from '../../assets/jsondb.jpg'
import morseIcon from '../../assets/morse-in-one.jpg'
import memeImg from '../../assets/meme.jpeg'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'
import morseWeb from '../../assets/morse-in-one-web.png'
import morseCodeGen from '../../assets/morse-code-generator.png'
import myBlogImg from '../../assets/my-blog.jpeg'
import taskImage from '../../assets/871bda872e968916ff02ae20757e478f.gif'
import fruitImage from '../../assets/303fff16bcb3b75de2881949fe2a9451c1fcc973.gif'
import gifImage from '../../assets/unnamed.png'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div
      style={{ color: colorTheme.primaryText }}
      className="flex flex-col justify-center items-center gap-4 w-full min-h-screen text-center my-8"
    >
      <h1 className="text-3xl text-center font-bold max-w-[800px]">Projects</h1>

      <div className="flex flex-wrap justify-center items-stretch gap-4 mt-8">
        <ProjectCard
          title="Task Manager"
          description="A user-friendly Task Manager application enabling efficient task organization through creation, categorization, prioritization, and due dates."
          image={taskImage}
          link="https://6808c5a8c0d9b4afe54b7ff3--endearing-platypus-484629.netlify.app/"
          delay={0.2}
        />
        <ProjectCard
          title="Fruit Matching Game"
          description="A fun game where you match fruits to test and improve your memory. Simple, colorful, and addictive for all ages!"
          image={fruitImage}
          link="https://github.com/iamBijoyKar/jsondb"
          delay={0.4}
        />
        <ProjectCard
          title="Random GIF Generator"
          description="Fetch random GIFs instantly based on keywords or surprise selections. A fun tool to explore endless GIF content dynamically!"
          image={gifImage}
          link="http://680fc2443534570f8d8316d0--famous-sawine-929a57.netlify.app/"
          delay={0.6}
        />
        <ProjectCard
          title="Meme Maker"
          description="Create memes online easily with drag-and-drop, customizable text, colors, and fun layouts. Built with React!"
          image={memeImg}
          link="https://680fcee34f544112ba85caee--stunning-pithivier-fb03ad.netlify.app/"
          delay={1.0}
        />
        {/* Uncomment if you want to add more projects in the future */}
        {/* 
        <ProjectCard
          title="Test Your Luck"
          description="A CLI-based number guessing game in Python with endless levels where difficulty increases after every success."
          image={testGif}
          link="https://github.com/iamBijoyKar/test_your_luck"
          delay={1.2}
        /> 
        */}
        {/* Uncomment if you want to showcase your blog later */}
        {/* 
        <ProjectCard
          title="My Personal Blog"
          description="Personal blog built with the Astro framework, sharing weekly tech and programming articles."
          image={myBlogImg}
          link="https://blog-bijoy-kar.netlify.app/"
          delay={1.4}
        /> 
        */}
        {/* 
        <ProjectCard
          title="Morse Code Generator"
          description="A simple web app that translates English text into Morse code live. Built with pure HTML, CSS, and JavaScript."
          image={morseCodeGen}
          link="https://github.com/iamBijoyKar/morse_code_generator"
          delay={1.6}
        /> 
        */}
        {/* 
        <ProjectCard
          title="Morse In One Website"
          description="Website version of Morse In One tool for translating Morse code with a sleek and minimal UI."
          image={morseWeb}
          link="https://github.com/iamBijoyKar/morse-in-one-website"
          delay={1.8}
        /> 
        */}
      </div>
    </div>
  )
}
