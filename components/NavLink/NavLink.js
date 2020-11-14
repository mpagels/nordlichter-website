import Link from 'next/link'
import styled from 'styled-components'

export default function NavLink({ path, label, index }) {
  return (
    <NavLinkStyled index={index}>
      <Link index={index} href={path}>
        <Label>{label.toUpperCase()} </Label>
      </Link>
    </NavLinkStyled>
  )
}

const NavLinkStyled = styled.div`
  height: 40px;
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
  cursor: pointer;
`
const Label = styled.span`
  color: #707070;
`
