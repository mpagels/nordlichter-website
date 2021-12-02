import styled from 'styled-components'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

export default function PersonnelFile({
  profilfoto,
  name,
  fachbereich,
  proffession,
  languages,
}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Profilphoto src={profilfoto} alt={name} isOpen={isOpen} />
      <GreyBox>
        <Name>{name}</Name>
        <Proffession>{proffession}</Proffession>
        <Language>
          Sprachen:{' '}
          {languages.map((language) => (
            <ReactCountryFlag key={name + language} countryCode={language} />
          ))}
        </Language>
        <Fachbereiche>
          <TitleButton onClick={handleClick}>
            {!isOpen ? 'Zeige' : 'Schließe'} Fachbereiche
          </TitleButton>
          {isOpen ? (
            <>
              <Line />
              <List>
                {fachbereich.map((bereich) => (
                  <li key={bereich}>{bereich}</li>
                ))}
              </List>
            </>
          ) : (
            ' '
          )}
        </Fachbereiche>
      </GreyBox>
    </Wrapper>
  )
}

const Language = styled.p`
  margin-top: 0;
  font-weight: 400;
  font-size: 0.89em;
`
const Proffession = styled.h3`
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 1em;
`

const Wrapper = styled.div`
  align-items: center;
  margin: 150px 20px 0;
  width: 300px;
  &:nth-last-of-type(1) {
    margin: 150px 20px 80px;
  }
  position: relative;
`

const Profilphoto = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -100px;
  opacity: ${({ isOpen }) => (isOpen ? '0.4' : '1')};
  z-index: 1;

  width: 175px;
  border-radius: 50%;
  border: 3px solid var(--font-color-blue);
  box-shadow: 0 1.1px 4px rgba(0, 0, 0, 0.018),
    0 2.8px 10.4px rgba(0, 0, 0, 0.026), 0 5.5px 20.4px rgba(0, 0, 0, 0.032),
    0 9.7px 36.4px rgba(0, 0, 0, 0.038), 0 17.3px 63.5px rgba(0, 0, 0, 0.044),
    0 34.1px 115.5px rgba(0, 0, 0, 0.052), 0 100px 254px rgba(0, 0, 0, 0.07);
`

const GreyBox = styled.div`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  color: var(--font-color-darkgrey);
  text-align: center;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`

const Name = styled.h2`
  margin-top: 80px;
  margin-bottom: 0;
  color: var(--font-color-blue);
  font-family: 'NL-bold';
  font-weight: bold;
  font-size: 1.2em;
  @media (min-width: 1092px) {
    grid-area: Name;
  }
`

const Fachbereiche = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1092px) {
    grid-area: Fachbereich;
  }
`

const TitleButton = styled.button`
  all: unset;
  width: 185px;
  cursor: pointer;
  font-family: 'NL-bold';
  font-size: 1em;
  color: white;
  margin-bottom: 10px;
  background-color: #15bd77;
  padding: 0.8em;
  border-radius: 15px;
`
const Line = styled.hr`
  color: var(--footer-font-color-lightgrey);
  width: 200px;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Person = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1092px) {
    grid-area: Person;
  }
`
