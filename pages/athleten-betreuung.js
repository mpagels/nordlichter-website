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
      <GreyBox>
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
`

const Text = styled.p`
  color: var(--font-color-darkgrey);
  font-weight: lighter;
  font-size: 1.1em;
  margin-left: 10px;
  margin-right: 10px;
`

const Help = styled.img``

const CallToAction = styled.p`
  text-align: center;
  color: var(--font-color-blue);
  font-weight: 900;
  font-size: 1.2em;
`

const NetworkLogo = styled(Help)`
  margin: 60px;
`

const styleSVG = {
  marginBottom: '35px',
}
