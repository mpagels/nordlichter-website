import styled from 'styled-components'
import BottomSvg from '../../assets/svgs/leistungen/begruessung-ende.svg'
import CallToAction from '../CallToAction/CallToAction'
import Link from 'next/link'
import ContactForm from '../ContactForm/ContactForm'
import leistungen from '../../assets/api/api-leistungen'
import TextSvgText from '../TextSvgText/TextSvgText'
import TrustElements from '../TrustElements/TrustElements'
import ButtonToContactForm from '../ButtonToContactForm/ButtonToContactForm'
import BlogPreview from '../BlogPreview/BlogPreview'

export default function LeistungenPage() {
  return (
    <Wrapper>
      <Headline>
        Herzlich Willkommen bei den Nordlichtern in Halstenbek
      </Headline>
      <Announcement>
        <h2>Liebe Patienten,</h2>
        <p>
          die Praxis ist vom <span>23.12.2024</span> bis <span>01.01.2025</span>{' '}
          geschossen.
        </p>
        <p>
          Am <span>Donnerstag</span> den <span>02.01.25</span> und{' '}
          <span>Freitag</span> den <span>03.01.25</span> finden{' '}
          <strong>auschließlich</strong> Behandlungen bei Herrn C. Rupp statt.
        </p>
        <p>
          Ab <span>Montag</span> den <span>06.01.25</span> sind wir wieder für
          Sie da.
        </p>
        <p>
          Wir wünschen Ihnen und Ihrer Familie ein frohes Weihnachtsfest und
          einen guten Rutsch ins neue Jahr!{' '}
        </p>
        <p>Ihr Nordlicht-Team</p>
      </Announcement>
      <ButtonToContactForm />
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

const Announcement = styled(AboutUs)`
  background-color: #ede9ec;
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
