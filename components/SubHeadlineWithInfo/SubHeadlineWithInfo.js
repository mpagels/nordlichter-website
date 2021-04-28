import styled from 'styled-components'

export default function SubHeadlineWithInfo({ headline, info }) {
  return (
    <Wrapper>
      <Headline> {headline}</Headline>
      <Info> {info}</Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
  color: var(--font-color-darkgrey);
  max-width: 880px;
`
const Headline = styled.h2`
  font-weight: 900;
`

const Info = styled.p`
  font-family: 'NL-normal';
  font-weight: 400;
  font-size: 1.1em;
`
