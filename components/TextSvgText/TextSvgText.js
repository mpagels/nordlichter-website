import styled from 'styled-components'

export default function TextSvgText({ firstText, children, secondText }) {
  return (
    <Wrapper>
      <Text>{firstText}</Text>
      <Svg> {children} </Svg>
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
  font-family: 'NL-normal';
  font-weight: regular;
  font-size: 1.2em;
  color: var(--font-color-darkgrey);
`

const Svg = styled.span`
  margin: 20px;
`

const Line = styled.hr`
  color: var(--line-color-lightgrey);
  width: 50%;
  margin: 40px;
  height: 0.1px;
`
