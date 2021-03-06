import Layout from '../components/Layout'
import Logo from '../components/Logo/Logo'
import styled from 'styled-components'
import preise from '../assets/api/api-preise'
import Content from '../components/GreyContextBox/Content'
import Price from '../components/Price/Price'
import GreyBoxContent from '../components/GreyContextBox/GreyContentBox'
import BottomSVG from '../assets/svgs/preise/bottom-preise.svg'

export default function Preise() {
  return (
    <Layout>
      <Logo />
      <GreyBox>
        <HeadlineGreyBox>Angebote für Selbstzahler</HeadlineGreyBox>
        <Content fontSize={'1.1em'} text={preise.greyContent} />
      </GreyBox>
      <NormalText>{preise.normalContent}</NormalText>
      <Svg>{preise.svg}</Svg>
      <BlueText>{preise.blueText}</BlueText>
      <Subheadline>Klassische Massage Therapie</Subheadline>

      <PriceWrapper>
        {preise.services.map((service) => (
          <Price {...service} />
        ))}
      </PriceWrapper>
      <GreyBoxContent text={preise.additionalBlueText} />
      <SvgWrapper>
        <BottomSVG />
      </SvgWrapper>
    </Layout>
  )
}

const GreyBox = styled.div`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`

const HeadlineGreyBox = styled.h1`
  color: var(--font-color-blue);
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
`

const NormalText = styled.p`
  margin: 25px;
  text-align: center;
  font-weight: 300;
  font-size: 1.1em;
  padding: 20px;
`

const BlueText = styled(NormalText)`
  color: var(--font-color-blue);
`

const Svg = styled.span`
  margin: 30px;
`

const Subheadline = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
`

const PriceWrapper = styled.div`
  display: flex;
  scrollbar-width: none;
  overflow-x: scroll;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`

const SvgWrapper = styled.div`
  margin: 60px 0 30px 0;
`
