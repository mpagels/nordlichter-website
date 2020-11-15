import styled from 'styled-components'
import Content from '../GreyContextBox.js/Content'

export default function HeadlineSvgInfo({ headline, children, info }) {
  return (
    <Wrapper>
      <Headline>{headline}</Headline>
      {children}
      <Content text={info} fontSize={'1.1em'} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 30px 20px;
  color: var(--font-color-darkgrey);
  font-family: 'Open Sans';
  text-align: center;
`

const Headline = styled.h3``
