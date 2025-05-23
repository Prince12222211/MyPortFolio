import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import SkillCard from '../Home/SkillCard'
import reactIcon from '../../assets/react.svg'
import reduxIcon from '../../assets/icons8-redux.svg'
import cIcon from '../../assets/icons8-c.svg'
import htmlIcon from '../../assets/icons8-html.svg'
import cssIcon from '../../assets/icons8-css.svg'
import jsIcon from '../../assets/js_logo.svg'
// import javaIcon from '../../assets/'
import javaIcon from '../../assets/java-4-logo.svg'
// import nodeIcon from '../../assets/node-js-icon-1817x2048-g8tzf91e.png'
import nodeIcon from '../../assets/icons8-nodejs.svg'
import gitIcon from '../../assets/icons8-git.svg'
import tailwindIcon from '../../assets/tailwindcss.svg'
import flaskIcon from '../../assets/icons8-flask.svg'
import pythonIcon from '../../assets/icons8-python.svg'
import astroIconLight from '../../assets/astro-icon-light.svg'
import astroIconDark from '../../assets/astro-icon-dark.svg'
import fastapiIcon from '../../assets/fastapi.svg'
import djangoIcon from '../../assets/icons8-django.svg'
import gitLabIcon from '../../assets/icons8-gitlab.svg'
import gitHubIcon from '../../assets/icons8-github.svg'
import cProgIcon from '../../assets/icons8-c-programming.svg'
import bootstrapIcon from '../../assets/icons8-bootstrap.svg'
// import javaicon from '../../assets/icons8-java.svg'
import phpIcon from '../../assets/PHP-logo.svg.png'
import mongoIcon from '../../assets/mongodb-icon-logo-png_seeklogo-503274.png'
import sqlIcon from '../../assets/sql-database-generic-icon-1521x2048-d0vdpxpg.png'
import postIcon from '../../assets/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175120.webp'
import mysqlIcon from '../../assets/images.png'
import linuxIcon from '../../assets/images.jpeg'
import lcIcon from '../../assets/LeetCode_logo_black.png'
export default function Skills() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const isDark = useSelector((state) => state.mode.darkMode)

  return (
    <div style={{ color: colorTheme.primaryText }} className="my-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Frontend</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          <SkillCard title={`React`}>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              src={reactIcon}
              width={'60px'}
              className="group"
              style={{ filter: 'drop-shadow(0px 0px 10px #5BC0F8f5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`HTML`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={htmlIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #FD8D14A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`CSS`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={cssIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #2CD3E1A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`JavaScript`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={jsIcon}
              width={'50px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #F0DE36A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`Tailwindcss`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={tailwindIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #75C2F6A5)' }}
              alt=""
            />
          </SkillCard>

          {/* <SkillCard title={`Redux`}>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              src={reduxIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #6F61C0A5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard> */}

          <SkillCard title={`Bootstrap`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={bootstrapIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #6F61C0A5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          {/* <SkillCard title={`Astro`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={isDark ? astroIconLight : astroIconDark}
              style={{
                filter: `drop-shadow(0px 0px 10px ${
                  isDark ? '#ffffff55' : '#00000055'
                })`,
              }}
              width={'45px'}
              alt=""
            />
          </SkillCard> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Backend</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          <SkillCard title={`NodeJs`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={nodeIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`PHP`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={phpIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`Flask`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={flaskIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #000000A5)' }}
              alt=""
            />
          </SkillCard>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Database</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          <SkillCard title={`MySQL`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={mysqlIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`mongoDB`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={mongoIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #0B666AA5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`PostgreSQL`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={postIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #000000A5)' }}
              alt=""
            />
          </SkillCard>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">Version Control</h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          <SkillCard title={`Git`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={gitIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #FD8D14A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`GitHub`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={gitHubIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #000000A5)' }}
              alt=""
            />
          </SkillCard>

          {/* <SkillCard title={`GitLab`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={gitLabIcon}
              width={'70px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #FD8D14A5)' }}
              alt=""
            />
          </SkillCard> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-center font-bold mt-8">
          Languages and Tools
        </h1>
        <div className="flex flex-wrap gap-3 justify-center max-w-[800px]">
          <SkillCard title={`Java`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={javaIcon}
              width={'50px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #F0DE36A5)' }}
              alt=""
            />
          </SkillCard>
          <SkillCard title={`LeetCode`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={lcIcon}
              width={'50px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #F0DE36A5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`Linux`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={linuxIcon}
              style={{ filter: 'drop-shadow(0px 0px 10px #F0DE36A5)' }}
              width={'60px'}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`C`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={cProgIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #9681EBA5)' }}
              alt=""
            />
          </SkillCard>

          <SkillCard title={`C++`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={cIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #2CD3E1A5)' }}
              alt=""
            />
          </SkillCard>
          <SkillCard title={`Javascript`}>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={jsIcon}
              width={'60px'}
              style={{ filter: 'drop-shadow(0px 0px 10px #2CD3E1A5)' }}
              alt=""
            />
          </SkillCard>
        </div>
      </div>
    </div>
  )
}
