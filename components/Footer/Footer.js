import footer from '../../assets/api/api-footer'
import styled from 'styled-components'
import FooterContentArea from './FooterContentArea'
import Map from './Map'
import Link from 'next/link'

export default function Footer() {
  return (
    <Wrapper>
      {footer.map((infos, index) => (
        <div key={`footerContent_${index}`}>
          <FooterContentArea {...infos} />
          <Line />
        </div>
      ))}
      <Link href="/datenschutz">
        <StyledLink>
          Datenschutz
        </StyledLink>
      </Link>
      <Map />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--footer-backgroundColor);
  color: var(--footer-font-color-lightgrey);
  text-align: center;
  padding-top: 95px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Line = styled.hr`
  color: var(--line-color-lightgrey);
  width: 50%;
  margin: 40px;
  height: 0.1px;
  text-align: center;
`

const StyledLink = styled.a`
color: var(--footer-font-color-lightgrey);
cursor: pointer;
margin-bottom: 30px;
`