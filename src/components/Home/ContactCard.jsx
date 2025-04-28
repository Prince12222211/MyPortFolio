import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardActionArea } from '@mui/material'

export default function ContactCard({ icon, text, dropShadow, link }) {
  const darkMode = useSelector((state) => state.mode.darkMode)
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer"
      style={{
        backgroundColor: colorTheme.secondaryBg,
        boxShadow: darkMode
          ? '0 0 10px rgba(255,255,255,0.1)'
          : '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: '0.5rem',
            paddingBottom: '0.5rem !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <img
            src={icon}
            alt="social-icon"
            width={50}
            height={50}
            style={{
              filter: `drop-shadow(${dropShadow})`,
            }}
          />
          <span
            style={{ color: colorTheme.primaryText }}
            className="font-bold text-sm"
          >
            {text}
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dropShadow: PropTypes.string,
  link: PropTypes.string.isRequired,
}

ContactCard.defaultProps = {
  dropShadow: '0px 0px 10px #45CFDDA5',
}
