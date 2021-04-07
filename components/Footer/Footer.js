import footer from '../../assets/api/api-footer'
import styled from 'styled-components'
import FooterContentArea from './FooterContentArea'
import Map from './Map'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  const isDesktop = useMediaQuery({ query: '(max-width: 841px)' })
  return (
    <Wrapper>
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
        <Map />
      </LastWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--footer-backgroundColor);
  color: var(--footer-font-color-lightgrey);
  text-align: center;
  padding-top: 95px;
  padding-bottom: 0;
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
