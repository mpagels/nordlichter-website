import Verband from '../../assets/jpg/nordlichter/trustElements/verband.jpg'
import Netzwerk from '../../assets/jpg/nordlichter/trustElements/netzwerk-sportmedizin.jpg'
import styled from 'styled-components'

export default function TrustElements() {
  return (
    <Wrapper>
      <img src={Verband} alt="logo_1" />
      <img src={Netzwerk} alt="logo_1" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  height: 140px;
  width: 300px;
  margin: 40px;
  margin-bottom: 80px;
`
