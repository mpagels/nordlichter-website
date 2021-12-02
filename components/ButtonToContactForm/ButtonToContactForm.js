import styled from 'styled-components'
import Link from 'next/link'

export default function ButtonToContactForm({ toContactForm }) {
  return (
    <Link href={toContactForm ? '/kontakt' : '#contactForm'} passHref>
      <StyledLink>Jetzt einen Termin vereinbaren!</StyledLink>
    </Link>
  )
}

const StyledLink = styled.a`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  margin: 30px 0;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`
