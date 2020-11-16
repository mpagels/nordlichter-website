import Layout from '../components/Layout'
import Logo from '../components/Logo/Logo'
import styled from 'styled-components'
import preise from '../assets/api/api-preise'
import Content from '../components/GreyContextBox/Content'

export default function Preise() {
  return (
    <Layout>
      <Logo />
      <GreyBox>
        <HeadlineGreyBox>Angebote für Selbstzahler</HeadlineGreyBox>
        <Content text={preise.greyContent} />
      </GreyBox>
      <NormalText>{preise.normalContent}</NormalText>
      <Svg>{preise.svg}</Svg>
      <BlueText>{preise.blueText}</BlueText>
    </Layout>
  )
}

const GreyBox = styled.div`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
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
`

const BlueText = styled(NormalText)`
  color: var(--font-color-blue);
`

const Svg = styled.span`
  margin: 30px;
`
