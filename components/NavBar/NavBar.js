import NavLink from '../NavLink/NavLink'
import navLinks from '../../config/navLinks'
import UseAnimations from 'react-useanimations'
import mail from 'react-useanimations/lib/menu3'
import MailSVG from '../../assets/svgs/navbar/mail.svg'
import Svg from '../util/Svg'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <NavBarWrapper isOpen={isOpen}>
      <UseAnimations
        reverse={isOpen}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        animation={mail}
        speed={4}
        style={gridStyle}
      />
      <Navs index={-1}>
        {router.pathname !== '/'
          ? navLinks
              .filter(({ path }) => path === router.pathname)[0]
              ['label'].toUpperCase()
          : 'LEISTUNGEN'}
      </Navs>
      {isOpen
        ? router.pathname !== '/'
          ? navLinks
              .filter(({ path }) => path !== router.pathname)
              .map(({ label, path }, index) => (
                <NavLink key={label} index={index} path={path} label={label} />
              ))
          : navLinks
              .slice(1)
              .filter(({ path }) => path !== router.pathname)
              .map(({ label, path }, index) => (
                <NavLink key={label} index={index} path={path} label={label} />
              ))
        : ''}
      <Svg style={gridStyle}>
        <Link href={'/kontakt'}>
          <MailSVG />
        </Link>
      </Svg>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 13% 74% 13%;
  ${({ isOpen }) => isOpen && 'grid-template-rows: repeat(5, 55px)'};
  align-items: center;
  justify-items: center;
  background-color: white;
  position: sticky;
  z-index: 1;
  top: 0;
`
const Navs = styled.div`
  height: 55px;
  grid-column-start: 2;
  grid-column-end: 2;
  justify-self: start;
  align-self: center;
  grid-row-start: ${({ index }) => index + 1};
  grid-row-end: ${({ index }) => index + 2};
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: var(--font-color-darkgrey);
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 1.1em;
`

const gridStyle = {
  paddingLeft: '20px',
}
