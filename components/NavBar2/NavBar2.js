import { useState } from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import Logo from '../../assets/png/NordlichterLogo-big.png'
import Link from 'next/link'

export default function NavBar2() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavigationWrapper>
      <Link href="/">
        <StyledLogoAnchor>
          <StyledImage src={Logo} alt="" />
        </StyledLogoAnchor>
      </Link>
      <NavBarWrapper isOpen={isOpen}>
        <NavBarList>
          <StyledNavLink>
            <Link href="/">
              <a>Home</a>
            </Link>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/leistungen">
              <a>Leistungen</a>
            </Link>

            <ul>
              <StyledNavLinkItem>
                <Link href="/verordnungen">
                  <a>Verordnung</a>
                </Link>
              </StyledNavLinkItem>
              <StyledNavLinkItem isDeactivated={true}>
                Akupunktur
                {/* <Link href="/akupunktur">
                  <a>r</a>
                </Link> */}
              </StyledNavLinkItem>
              <StyledNavLinkItem>
                <Link href="/leistungen/betriebliches-gesundheitsmanagment">
                  <a>Betriebliches Gesundheitsmanagment</a>
                </Link>
              </StyledNavLinkItem>
            </ul>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/jobs">
              <a>Jobs</a>
            </Link>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/nordlichter">
              <a>Nordlichter</a>
            </Link>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/partner">
              <a>Partner</a>
            </Link>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </StyledNavLink>
          <StyledNavLink>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </StyledNavLink>
        </NavBarList>
      </NavBarWrapper>
      <BurgerMenu onClick={changeBurgerOpen} isOpen={isOpen} />
    </NavigationWrapper>
  )

  function changeBurgerOpen() {
    setIsOpen(!isOpen)
  }
}

const StyledImage = styled.img`
  padding: 20px;
  height: 160px;
  @media (max-width: 1170px) {
    height: 130px;
  }
  @media (max-width: 1060px) {
    height: 100px;
  }
`
const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 172px;
  & a {
    color: var(--color-font-darkgrey);
  }
`

const NavBarWrapper = styled.nav`
  display: ${(prop) => (prop.isOpen ? 'flex' : 'none')};
  justify-content: flex-start;
  position: absolute;
  left: 20px;
  top: 57px;
  ${(prop) =>
    prop.isOpen
      ? `background: white;
  width: 95%;`
      : ';'}
  border-radius: 15px;

  margin-right: 0;
  padding: 20px;
  box-shadow: 0 0px 5.7px rgba(0, 0, 0, 0.022),
    0 0px 14.5px rgba(0, 0, 0, 0.031), 0 0px 29.6px rgba(0, 0, 0, 0.039),
    0 0px 61px rgba(0, 0, 0, 0.048), 0 0px 167px rgba(0, 0, 0, 0.07);
  @media (min-width: 943px) {
    display: flex;
    justify-content: flex-end;
    position: relative;
    box-shadow: none;
    top: 0;
    left: 0;
  }
`

const NavBarList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  @media (min-width: 943px) {
    flex-direction: row;
  }
`

const StyledNavLinkItem = styled.li`
  margin: 5px 0;
  color: lightgray;

  ${({ isDeactivated }) =>
    !isDeactivated &&
    `color: var(--font-color-darkgrey);
  &:hover {
    color: var(--font-color-blue);
  }`}
`
const StyledNavLink = styled.li`
  margin: 5px 20px;
  color: lightgray;
  position: relative;
  ${({ isDeactivated }) =>
    !isDeactivated &&
    `color: var(--font-color-darkgrey);
  &:hover {
    color: var(--font-color-blue);
  }`}

  & > ul {
    list-style-type: none;
    padding-left: 15px;

    &:hover > ul {
      color: var(--font-color-darkgrey);
    }
  }

  @media (min-width: 943px) {
    & > ul {
      display: flex;
      opacity: 0;
      position: absolute;
      transition: 0.3s;
      flex-direction: column;
      padding: 20px;
      margin: 0;
      gap: 7px;
      top: 20px;
      left: -20px;
      visibility: hidden;
    }
    & li {
      margin: 0;
    }
    &:hover > ul {
      color: var(--font-color-darkgrey);
      border-radius: 10px;
      background: white;
      position: absolute;
      top: 20px;
      left: -20px;
      display: flex;
      opacity: 1;
      flex-direction: column;
      gap: 7px;
      margin: 0;
      padding: 20px;
      visibility: visible;
      list-style-type: none;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
        0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    }
  }
`

const StyledLogoAnchor = styled.a`
  margin: 20px;
`
