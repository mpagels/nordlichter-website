import styled from 'styled-components'
import ArrowSmallSVG from '../../assets/svgs/preise/arrowSmall.svg'

export default function Arrow({ percent }) {
  return (
    <Wrapper>
      <Percent>{percent}</Percent>
      <ArrowSmallSVG />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Percent = styled.span`
  position: absolute;
  left: 30px;
  top: 9px;
  font-family: 'NL-normal';
  font-weight: 700;
  color: white;
  font-size: 1.5em;
  letter-spacing: 3px;
`
