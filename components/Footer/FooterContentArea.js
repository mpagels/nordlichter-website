import styled from 'styled-components'

export default function FooterContentArea({ title, infos }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {Array.isArray(infos) ? (
        infos.map((info) => (
          <Info>
            {info.includes('Mail:') ? (
              <Mail href="mailto:info@nordlichter-halstenbek.de">{info}</Mail>
            ) : (
              info
            )}
          </Info>
        ))
      ) : (
        <a href="https://www.facebook.com/Nordlichter.Halstenbek">{infos}</a>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px 0;
`
const Title = styled.h3`
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 1.4em;
`

const Info = styled.p`
  margin: 40px;
  font-size: 1.1em;
  font-family: 'Nunito Sans';
  font-weight: lighter;
`
const Mail = styled.a`
  &:link {
    color: inherit;
  }
`
