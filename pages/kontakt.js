import Layout from '../components/Layout'
import kontakt from '../assets/api/api-kontakt'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import Logo from '../components/Logo/Logo'
import ContactForm from '../components/ContactForm/ContactForm'
import styled from 'styled-components'
import MessageSendSVG from '../assets/svgs/kontakt/emailSend.svg'
import { useState } from 'react'

export default function Kontakt() {
  const [isSend, setIsSend] = useState(false)

  const onSubmit = () => {
    setIsSend(true)
  }

  return (
    <Layout>
      <Logo />
      {kontakt.map((element) => (
        <HeadlineSvgInfo headline={element.headline} info={element.info}>
          {element.svg}
        </HeadlineSvgInfo>
      ))}

      {isSend ? (
        <>
          <MessageSendSVG />
          <SucessMessage>
            Wir haben ihre Nachricht erhalten und melden uns umgehend bei Ihnen!
          </SucessMessage>
          <AgainButton
            type="button"
            onClick={() => setIsSend(false)}
            value="Weitere Nachricht schreiben"
          />
        </>
      ) : (
        <>
          <Headline>
            Wann genau können wir für Sie am besten die Termine planen?
          </Headline>
          <ContactForm onSubmit={onSubmit} />
        </>
      )}
    </Layout>
  )
}

const Headline = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.1em;
`

const SucessMessage = styled.h4`
  text-align: center;
`

const AgainButton = styled.input`
  all: unset;
  cursor: pointer;
  margin-bottom: 30px;
  text-decoration: underline;
`
