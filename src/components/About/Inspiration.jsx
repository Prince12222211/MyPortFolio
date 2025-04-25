import React from 'react'
import { useSelector } from 'react-redux'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'

export default function Inspiration() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      className="my-8 max-w-[800px] w-full "
      style={{
        color: colorTheme.primaryText,
      }}
    >
      <h1 className="text-4xl font-bold text-center">Dreams & Inspiration</h1>
      <p className="text-center text-xl mt-8">
        I am very interested in the technical field, especially in roles like
        Technical Officer. I find the idea of working with innovative
        technologies and solving complex problems exciting. I believe that the
        technical field offers endless opportunities for growth and development.
        Additionally, I am also interested in starting my own business one day.
        I am always looking for ways to expand my knowledge and skills in both
        technical areas and entrepreneurship.
      </p>
      <div className=" mx-auto max-w-[500px] my-4">
        <p className="text-center text-xl">
          Inspirational quotes can be a great way to motivate yourself and
          others.
        </p>
        <h3 className="text-2xl text-center font-bold mt-4">
          My Favourite Quote
        </h3>
        <p className="text-lg text-center mt-4 ">
          <BiSolidQuoteAltLeft className="inline-block text-2xl relative top-[-.5rem]" />{' '}
          Persistence is very important. You should not give up unless you are
          forced to give up.{' '}
          <BiSolidQuoteAltRight className="inline-block text-2xl relative bottom-[.5rem]" />
        </p>
        <p className="text-lg mt-2 text-end">–Elon Musk</p>
      </div>
    </div>
  )
}
