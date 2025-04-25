import React from 'react'
import ImageList from '@mui/material/ImageList'

import HobbiyCard from './HobbyCard'
import { useSelector } from 'react-redux'

export default function Hobbies() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div
      style={{ color: colorTheme.primaryText }}
      className="text-center my-8 max-w-[1000px] "
    >
      <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="">
          <p className="text-xl lg:text-start ">
            I have a few hobbies that I really enjoy in my free time. Playing
            badminton is one of my favorites — I love the energy, the movement,
            and the teamwork involved. I'm also into reading books; it's a great
            way to relax and explore new ideas. I enjoy working out too — it
            keeps me fit and helps clear my mind. Besides that, I love listening
            to music and watching movies — both help me unwind and recharge.
            These are some of the things that keep me balanced and motivated.
          </p>
        </div>
        <ImageList>
          <HobbiyCard
            title="Playing Badminton"
            description="I love playing Badminton"
            image="/images/istockphoto-1192023529-612x612.jpg"
          />
          <HobbiyCard
            title="Reading Books"
            description="I love Reading Books"
            image="/images/newFile-2.avif"
          />
          <HobbiyCard
            // cols={2}
            title="Exercise"
            description="I love Do Exercise"
            image="/images/45.webp"
          />
          <HobbiyCard
            // cols={2}
            title="Listening Music"
            description="I love Listening Music"
            image="/images/photo-1615554851544-e6249b92a492.avif"
          />
          <HobbiyCard
            cols={2}
            title="Watching Movies"
            description="I love Watching Movies"
            image="/images/Stoner_Movies.webp"
          />
        </ImageList>
      </div>
    </div>
  )
}
