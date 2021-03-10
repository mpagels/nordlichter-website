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
      {kontakt.map((element, index) => (
        <HeadlineSvgInfo
          key={`headlineSvgInfo_${index}`}
          headline={element.headline}
          info={element.info}
        >
          {element.svg}
        </HeadlineSvgInfo>
      ))}

      {isSend ? (
        <>
          <MessageSendSVG />
          <SucessMessage>
            Wir haben ihre Nachricht erhalten und melden uns umgehend bei Ihnen!
          </SucessMessage>
        </>
      ) : (
        <>
          <Headline>
            Zu welchem der beiden Themen wollen Sie uns schreiben?
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

//  {/* <form onSubmit={handleSubmit(onSubmit)}>
//         {/* register your input into the hook by invoking the "register" function */}
//         <input name="example" defaultValue="test" ref={register} />

//         {/* include validation with required or other standard HTML validation rules */}
//         <input name="exampleRequired" ref={register({ required: true })} />
//         {/* errors will return when field validation fails  */}
//         {errors.exampleRequired && <span>This field is required</span>}

//         <input type="submit" />
//       </form> */}
