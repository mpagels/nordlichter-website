import styled from 'styled-components'
import Content from '../GreyContextBox/Content'

export default function HeadlineSvgInfo({ headline, children, info }) {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      <Svg> {children} </Svg>
      <Content text={info} fontSize={'1.1em'} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 20px;
  color: var(--font-color-darkgrey);
  font-family: 'Open Sans';
  text-align: center;
`

const Headline = styled.h3`
  margin-bottom: 30px;
`

const customStyle = {
  marginTop: '30px',
}

const Svg = styled.span`
  margin: 20px;
`
