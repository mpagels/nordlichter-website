import styled from 'styled-components'
import React from 'react'
import Exclamation from '../../assets/svgs/ausrufezeichen-mit-person.svg'
import ThreePeople from '../../assets/svgs/drei-leute.svg'
import leistungen from '../../assets/api/api-leistungen'

export default function WelcomeAttentionMsg() {
  return (
    <Wrapper>
      <Exclamation style={svgStyle} />
      <Message>{leistungen[0].attentionMsg}</Message>
      <ThreePeople style={svgStyle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Message = styled.section`
  text-align: center;
  font-weight: bold;
  color: var(--font-color-blue);
  margin: 20px 33px;
  font-size: 1.1em;
`

const svgStyle = {
  margin: '20px',
}
