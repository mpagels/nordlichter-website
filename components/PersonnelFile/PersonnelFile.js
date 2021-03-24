import styled from 'styled-components'

export default function PersonnelFile({
  profilfoto,
  name,
  fachbereich,
  person,
}) {
  return (
    <Wrapper>
      <Profilphoto src={profilfoto} alt={name} />
      <GreyBox>
        <Name>{name}</Name>
        <Fachbereiche>
          <Title>Fachbereiche</Title>
          <Line />
          <List>
            {fachbereich.map((bereich) => (
              <li key={bereich}>{bereich}</li>
            ))}
          </List>
        </Fachbereiche>
        <Person>
          <Title>Zur Person</Title>
          <Line />
        <p>{person}</p>
        </Person>
      </GreyBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  margin: 150px 20px 0;

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
top:-100px;

@media (min-width: 1092px) {
  margin-left: 40px 

}
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
  z-index: -1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  @media (min-width: 1092px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
    "Name ."
    "Fachbereich Person"
  }


`

const Name = styled.h2`
  margin-top: 80px;
  color: var(--font-color-blue);
  font-family: 'NL-bold';
  font-weight: bold;
  font-size: 1.2em;
  @media (min-width: 1092px) {
    grid-area: Name
  }
  
`

const Fachbereiche = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1092px) {
    grid-area: Fachbereich
  }
`

const Title = styled.h3`
  font-family: 'NL-bold';
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 10px;
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
