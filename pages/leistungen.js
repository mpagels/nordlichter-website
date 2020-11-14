import styled from 'styled-components'
import leistungen from '../assets/api/api-leistungen'

import Layout from '../components/Layout'
import WelcomeAttentionMsg from '../components/WelcomeAttentionMsg/WelcomeAttentionMsg'
import TextSvgText from '../components/TextSvgText/TextSvgText'
import BottomSvg from '../assets/svgs/leistungen/begruessung-ende.svg'

export default function Leistungen() {
  return (
    <Layout>
      <WelcomeAttentionMsg />
      <Headline>Herzlich Willkommen bei den Nordlichtern</Headline>
      <AboutUs>
        Wir sind Ihre <span>Ansprechpartner</span> in Halstenbek rund um das
        Thema Physiotherapie, Prävention und Ernährung. Ob körperliche
        Beschwerden im Alltag oder eine aufwändige Reha nach einer OP, wir
        begleiten Sie auf Ihrem Weg zur <span>Gesundheit</span>.
      </AboutUs>
      {leistungen.infoTexts.map(({ firstText, svg, secondText }, index) => (
        <TextSvgText key={index} firstText={firstText} secondText={secondText}>
          {svg}
        </TextSvgText>
      ))}
      <Subline>Die Nordlichter - wir freuen uns auf Sie!</Subline>
      <BottomSvg style={bottomSvgStyle} />
    </Layout>
  )
}

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 1.2em;
`

const AboutUs = styled.section`
  background-color: var(--infoBox-color-lightgrey);
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px 20px 75px 20px;
  font-weight: 300;
  font-size: 1em;

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
}
