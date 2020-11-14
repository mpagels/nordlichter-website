import footer from '../../assets/api/api-footer'
import styled from 'styled-components'
import FooterContentArea from './FooterContentArea'
import Map from './Map'

export default function Footer() {
  return (
    <Wrapper>
      {footer.map((infos) => (
        <>
          <FooterContentArea {...infos} />
          <Line />
        </>
      ))}
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
  z-index: -1;
`

const Line = styled.hr`
  color: var(--line-color-lightgrey);
  width: 50%;
  margin: 40px;
  height: 0.1px;
  text-align: center;
`
