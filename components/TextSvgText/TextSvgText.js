import styled from 'styled-components'
import Svg from '../util/Svg'

export default function TextSvgText({ firstText, svg, secondText }) {
  return (
    <Wrapper>
      <Text>{firstText}</Text>
      <Svg svg={svg}></Svg>
      <Text>{secondText}</Text>
      <Line />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  padding: 0 24px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: regular;
  font-size: 1.1em;
  color: var(--font-color-darkgrey);
`
const Line = styled.hr`
  color: var(--line-color-lightgrey);
  width: 50%;
  margin: 40px;
  height: 0.1px;
`
