import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import ContactCard from './ContactCard'
import linkedInIcon from '../../assets/icons8-linkedin.svg'
import githubIcon from '../../assets/icons8-github.svg'
import twitterIcon from '../../assets/icons8-twitter.svg'
import redditIcon from '../../assets/icons8-reddit.svg'
import { useNavigate } from 'react-router-dom'
import HireMe from './HireMe'

export default function Contact() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      animate(
        aboutRef.current,
        { opacity: 1, x: 0 },
        { delay: 0.2, duration: 0.2 },
      )
    } else {
      animate(aboutRef.current, { opacity: 0, x: -100 })
    }
  }, [isInView, animate, aboutRef])

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 max-w-[600px]"
      id="contact"
    >
      <div
        ref={aboutRef}
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">{`Let's`} Connect!</h1>
        <div className="flex flex-wrap lg:flex-row gap-4 items-center justify-center">
          <ContactCard
            text="in/princeverma2306"
            icon={linkedInIcon}
            link="https://www.linkedin.com/in/princeverma2306/"
          />
          {/* <ContactCard
            text="@prince2306"
            icon={twitterIcon}
            link="https://twitter.com/prince2306"
          /> */}
          <ContactCard
            text="u/Firm_Path3985"
            icon={redditIcon}
            dropShadow="0 0 10px #dddddd55"
            link="https://www.reddit.com/user/Firm_Path3985/"
          />
          <ContactCard
            text="@Prince12222211"
            icon={githubIcon}
            dropShadow="0 0 10px #00000055"
            link="https://github.com/Prince12222211"
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('/contact')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
      <HireMe />
    </div>
  )
}
