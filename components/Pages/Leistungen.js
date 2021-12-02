import styled from 'styled-components'
import BottomSvg from '../../assets/svgs/leistungen/begruessung-ende.svg'
import CallToAction from '../CallToAction/CallToAction'
import Link from 'next/link'
import ContactForm from '../ContactForm/ContactForm'
import leistungen from '../../assets/api/api-leistungen'
import TextSvgText from '../TextSvgText/TextSvgText'
import TrustElements from '../TrustElements/TrustElements'

export default function LeistungenPage() {
  return (
    <Wrapper>
      <Headline>Herzlich Willkommen bei den Nordlichtern</Headline>
      <Link href="#contactForm" passHref>
        <StyledLink>Jetzt einen Termin vereinbaren!</StyledLink>
      </Link>
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
      <ContactForm />
      <TrustElements />
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
const StyledLink = styled.a`
  all: unset;
  background-color: #15bd77;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  box-shadow: 0 0.5px 2.2px rgba(0, 0, 0, 0.045),
    0 1.3px 5.3px rgba(0, 0, 0, 0.065), 0 2.4px 10px rgba(0, 0, 0, 0.08),
    0 4.2px 17.9px rgba(0, 0, 0, 0.095), 0 7.9px 33.4px rgba(0, 0, 0, 0.115),
    0 19px 80px rgba(0, 0, 0, 0.16);
`
