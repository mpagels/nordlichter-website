import styled from 'styled-components'

export default function HeadlineWithSvg({ headline, children }) {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <Svg>{children}</Svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled.h1`
  text-align: center;
  color: var(--font-color-darkgrey);
  font-size: 1.3em;
  font-weight: 900;
`
const Svg = styled.span`
  margin: 20px;
`
