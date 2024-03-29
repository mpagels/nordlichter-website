import Verband from '../../assets/jpg/nordlichter/trustElements/verband.png'
import Netzwerk from '../../assets/jpg/nordlichter/trustElements/netzwerk-sportmedizin.png'
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
  margin: 80px 0;
  background: white;
`
