import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import handShake from '../../assets/handshake-v.mp4'
import { confettiActions } from '../../store'

export default function HireMe() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const isHireMeSubmitted = useSelector(
    (state) => state.contactForm.isHireMeSubmitted,
  )
  const dispatch = useDispatch()
  const [handShakeVisible, setHandShakeVisible] = useState(false)
  const videoRef = useRef(null)
  const navigate = useNavigate()

  const handleClick = () => {
    setHandShakeVisible(true)

    setTimeout(() => {
      setHandShakeVisible(false)
    }, 2500)

    setTimeout(() => {
      navigate('/contact')
      dispatch(confettiActions.toggle())
    }, 3000)

    setTimeout(() => {
      dispatch(confettiActions.toggle())
    }, 15000)
  }

  if (isHireMeSubmitted) {
    return null
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Button
        onClick={handleClick}
        sx={{
          color: colorTheme.primaryText,
          backgroundColor: `${colorTheme.primaryText}1A`,
          padding: '1rem 2rem',
          border: `1px solid ${colorTheme.primaryText}`,
          borderRadius: '0.5rem',
          textTransform: 'none',
        }}
        size="large"
      >
        <h1 className="text-xl">Hire Me</h1>
      </Button>

      {handShakeVisible && (
        <div className="max-w-[400px] w-full">
          <video
            ref={videoRef}
            src={handShake}
            autoPlay
            muted
            playsInline
            className="w-full rounded-lg"
          />
        </div>
      )}
    </div>
  )
}
