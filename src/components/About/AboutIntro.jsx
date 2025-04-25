import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutIntro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="text-center mt-4 max-w-[800px]"
    >
      <h1 className="text-4xl font-bold">Hi, I am Prince Verma</h1>
      <div className="mt-2">
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Developer
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Student
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Learner
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Tect Enthusiast
        </span>
      </div>
      <p className="text-xl mt-8">
        Hi there! {`I'm`} a full stack web developer and computer science
        student with a passion for building sleek, user-friendly web
        applications. While I’m stronger on the frontend side—where I love
        crafting smooth, responsive interfaces—I’m actively leveling up my
        skills in backend development and databases. I thrive on learning new
        tech and tackling tough challenges head-on. {`I'm`} Always curious and
        driven, I'm constantly looking for opportunities to grow my skills and
        work on exciting projects. You can check out some of my work on GitHub
        or my personal website. Thanks for stopping by!
      </p>
    </div>
  )
}
