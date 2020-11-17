import styled from 'styled-components'
import ArrowSmallSVG from '../../assets/svgs/preise/arrowSmall.svg'
import Svg from '../util/Svg'
import ArrowBigSVG from '../../assets/svgs/preise/arrowBig.svg'

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
  font-family: 'Open Sans';
  font-weight: 700;
  color: white;
  font-size: 1.2em;
`
