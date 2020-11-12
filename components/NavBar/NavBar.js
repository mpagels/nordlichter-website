import NavLink from '../NavLink'
import navLinks from '../../config/navLinks'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <NavBarWrapper>
      {navLinks.map(({ path, label }) => (
        <NavLink path={path} label={label} />
      ))}
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
