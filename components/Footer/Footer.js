import footer from '../../assets/api/api-footer'
import styled from 'styled-components'
import FooterContentArea from './FooterContentArea'
import Map from './Map'
import Link from 'next/link'
import GoogleLogoPNG from '../../assets/png/footer/google-logo.png'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  const isDesktop = useMediaQuery({ query: '(max-width: 841px)' })
  return (
    <Wrapper>
      <GoogleRezension>
        <p>
          Waren Sie mit unser Leistung zufrieden oder haben Sie Vorschläge, wie
          wir uns verbessern können? Dann klicken Sie auf das{' '}
          <a
            style={{ color: 'white' }}
            href="https://www.google.com/search?q=nordlichter+halsenbek#lrd=0x47b18128d7d26c01:0x975243cc198cbb69,1,,,"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Logo
          </a>{' '}
          und schreiben Sie uns gerne eine Rezension. Wir freuen uns über
          konstruktive Kritik und positive Rückmeldungen. Herzlichen Dank!
        </p>
        <a
          href="https://www.google.com/search?q=nordlichter+halsenbek#lrd=0x47b18128d7d26c01:0x975243cc198cbb69,1,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleLogo src={GoogleLogoPNG} alt="google-logo" />{' '}
        </a>
      </GoogleRezension>

      <TextWrapper>
        {footer.map((infos, index) => (
          <div key={`footerContent_${index}`}>
            <FooterContentArea {...infos} />
            {isDesktop && <Line />}
          </div>
        ))}
      </TextWrapper>
      <LastWrapper>
        <Link href="/datenschutz">
          <StyledLink>Datenschutz</StyledLink>
        </Link>
      </LastWrapper>
      <Map />
    </Wrapper>
  )
}

const GoogleLogo = styled.img`
  height: 60px;
`

const GoogleRezension = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 880px;
  margin-bottom: 40px;
  padding: 0 20px;
`

const Wrapper = styled.footer`
  background-color: var(--footer-backgroundColor);
  color: var(--footer-font-color-lightgrey);
  text-align: center;
  padding-top: 40px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 841px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`

const LastWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Line = styled.hr`
  color: var(--line-color-lightgrey);
  margin: 40px;
  height: 0.1px;
  text-align: center;
`

const StyledLink = styled.a`
  color: var(--footer-font-color-lightgrey);
  cursor: pointer;
  margin-bottom: 30px;
`
