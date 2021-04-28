import styled from 'styled-components'
import Exclamation from '../../assets/svgs/leistungen/ausrufezeichen-mit-person.svg'
import ThreePeople from '../../assets/svgs/leistungen/drei-leute.svg'
import leistungen from '../../assets/api/api-leistungen'

export default function WelcomeAttentionMsg() {
  return (
    <Wrapper>
      <Exclamation style={svgStyle} />
      <Message>{leistungen.attentionMsg}</Message>
      <ThreePeople style={svgStyle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 841px) {
    flex-direction: column;
  }
`

const Message = styled.section`
  text-align: center;
  font-weight: bold;
  color: var(--font-color-blue);
  margin: 20px 33px;
  font-size: 1.1em;
  max-width: 400px;
`

const svgStyle = {
  margin: '20px',
}
