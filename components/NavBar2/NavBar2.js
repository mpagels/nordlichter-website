import styled from 'styled-components/macro'

export default function NavBar2() {
  return (
    <NavBarWrapper>
      <StyledNavLink>Home</StyledNavLink>
      <StyledNavLink>
        Leistungen
        <ul>
          <li onClick={() => console.log('verordnung')}>Verordnung</li>
          <li>Selbstzahler</li>
          <li>Betriebliches Gesundheitsmanagment</li>
          <li>Athlethen Betreuung</li>
        </ul>
      </StyledNavLink>
      <StyledNavLink>Partner</StyledNavLink>
      <StyledNavLink>Team</StyledNavLink>
      <StyledNavLink>Blog</StyledNavLink>
    </NavBarWrapper>
  )
}

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`
const StyledNavLink = styled.p`
  margin: 0 20px;
  cursor: pointer;
  position: relative;

  & > ul {
    display: none;
  }

  &:hover {
    color: var(--font-color-blue);
  }

  &:hover > ul {
    color: var(--font-color-darkgrey);
    border-radius: 10px;
    position: absolute;
    top: 20px;
    left: -20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin: 0;
    padding: 20px;
    list-style-type: none;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);

    & > li:hover {
      color: var(--font-color-blue);
    }
  }
`
