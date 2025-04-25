import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      id="intro"
      style={{ color: colorTheme.primaryText }}
      className="max-w-[800px] w-full mx-auto"
    >
      <h1 className="text-4xl text-center font-bold">My Projects</h1>
      <p className="text-center text-xl mt-4">
        Hi, {`I'm`} Prince Verma — passionate about building projects and solving real-world problems. I love exploring new technologies, learning new skills, and turning ideas into impactful solutions. Check out some of my work on my GitHub!{' '}
        <Link className="font-bold" to={`https://github.com/Prince12222211`}>
          @Prince12222211{' '}
        </Link>{' '}
        . {`I'm`} always looking for new challenges and opportunities to learn
        and grow. If you have any questions or suggestions, feel free to contact
        me{' '}
        <Link to={`/contact`} className="font-bold">
          @Contact
        </Link>{' '}
        .
      </p>
    </div>
  )
}
