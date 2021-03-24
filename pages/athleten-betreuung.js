import Layout from '../components/Layout'
import styled from 'styled-components'
import Logo from '../components/Logo/Logo'
import athlethenBetreuung from '../assets/api/api-athlethen-betreuung'
import help from '../assets/png/athlethen-betreuung/help.png'
import team from '../assets/png/athlethen-betreuung/team.png'
import GirlGoalLineSVG from '../assets/svgs/athlethen-betreuung/girl-goal-line.svg'
import network from '../assets/png/athlethen-betreuung/netztwerk.png'

export default function Athlenbetreuung() {
  return (
    <Layout>
      <GreyBox>
        {athlethenBetreuung.firstText.map((text, index) => (
          <Text key={`firstText_${index}`}>{text}</Text>
        ))}
        <Help src={help} alt="Logo" />
        {athlethenBetreuung.secondText.map((text, index) => (
          <Text key={`secondText_${index}`}>{text}</Text>
        ))}
      </GreyBox>
      <GreyBox noGrid={true}>
        {athlethenBetreuung.thirdText.map((text, index) => (
          <Text key={`thirdText_${index}`}>{text}</Text>
        ))}
        <Help src={team} alt="Logo" />
        {athlethenBetreuung.fourthText.map((text, index) => (
          <Text key={`fourthText_${index}`}>{text}</Text>
        ))}
        <CallToAction>Sprechen Sie uns an!</CallToAction>
      </GreyBox>
      <NetworkLogo src={network} alt="Logo" />
      <GirlGoalLineSVG style={styleSVG} />
    </Layout>
  )
}

const GreyBox = styled.div`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) { 
    padding: 60px 0;width: 880px;
    ${({noGrid}) => !noGrid && `display: grid;
    grid-template-columns: 430px 430px;
    gap: 20px;`}
    margin-top: 190px;
    position: relative;
   }
`

const Text = styled.p`
  color: var(--font-color-darkgrey);
  font-weight: lighter;
  font-size: 1.1em;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 992px) { padding: 0 30px;}
`

const Help = styled.img`

width: 308px;
height: 227py;
@media (min-width: 992px) { position: absolute ;margin-left: auto;
margin-right: auto;
top:-150px;
left: 0;
right: 0;}`

const CallToAction = styled.p`
  text-align: center;
  color: var(--font-color-blue);
  font-weight: 900;
  font-size: 1.2em;
`

const NetworkLogo = styled.img`
  margin: 60px;
`

const styleSVG = {
  marginBottom: '35px',
}
