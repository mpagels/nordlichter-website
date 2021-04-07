import styled from 'styled-components'
import BottomSvg from '../../assets/svgs/leistungen/begruessung-ende.svg'
import CallToAction from '../CallToAction/CallToAction'
import ContactForm from '../ContactForm/ContactForm'
import leistungen from '../../assets/api/api-leistungen'
import TextSvgText from '../TextSvgText/TextSvgText'
import TrustElements from '../TrustElements/TrustElements'

export default function LeistungenPage() {
  return (
    <Wrapper>
      <Headline>Herzlich Willkommen bei den Nordlichtern</Headline>
      <CallToAction />
      <AboutUs>
        Ihre <span>Ansprechpartner</span> in Halstenbek rund um das Thema
        Physiotherapie, Prävention und Gesundheit.
        <br /> Ob körperliche Beschwerden im Alltag oder eine aufwändige Reha
        nach einer OP, wir begleiten Sie auf Ihrem Weg zur{' '}
        <span>Gesundheit</span>.
      </AboutUs>
      {leistungen.infoTexts.map(({ firstText, svg, secondText }, index) => (
        <TextSvgText key={index} firstText={firstText} secondText={secondText}>
          {svg}
        </TextSvgText>
      ))}
      <TrustElements />
      <Line />
      <ContactForm />
      <Subline>Die Nordlichter - wir freuen uns auf Sie!</Subline>
      <BottomSvg style={bottomSvgStyle} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 2em;
`

const AboutUs = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  font-weight: 300;
  font-size: 1.2em;

  & span {
    color: var(--font-color-blue);
    font-weight: 400;
  }
`

const Subline = styled.h2`
  color: var(--font-color-darkgrey);
  margin: 40px 30px 80px;
  text-align: center;
  font-weight: 900;
  font-size: 1.2em;
`

const bottomSvgStyle = {
  position: 'relative',
  bottom: '-9px',
  width: '350px',
  height: '100%',
}

const Line = styled.hr`
  color: var(--line-color-lightgrey);
  width: 50%;
  margin: 40px;
  height: 0.1px;
`
