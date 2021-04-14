import Layout from '../../components/Layout'
import betrieblichesManagement from '../../assets/api/api-betrieblichesManagement'
import Content from '../../components/GreyContextBox/Content'
import styled from 'styled-components'
import GreyBoxContent from '../../components/GreyContextBox/GreyContentBox'
import BetreuungListItem from '../../components/BetreuungsListItem/BetreuungListItem'

export default function BetrieblichesGesundheitsmanagement() {
  return (
    <Layout>
      <GreyBox>
        <HeadlineGreyBox>Betriebliches Gesundheitsmanagment</HeadlineGreyBox>
        <Content
          fontSize={'1.1em'}
          text={betrieblichesManagement.greyContent_1}
        />
        <TipBox>
          <ColorBorder />
          <div>
            <strong>Tipp:</strong> Wussten Sie dass Sie eine betriebliche
            Gesundheitsförderung mit <br />
            <strong>500 € pro Mitarbeiter</strong> <br /> pro Jahr steuerlich
            geltend machen können?
          </div>
        </TipBox>
        <Content
          fontSize={'1.1em'}
          text={betrieblichesManagement.greyContent_2}
        />
      </GreyBox>
      <SupportHeadline>
        Punkte einer solchen Betreuung durch unsere Physiotherapeuten könnten
        unter anderem sein:
      </SupportHeadline>
      <SupportList>
        {betrieblichesManagement.beratungen.map((beratung) => (
          // @ts-ignore
          <BetreuungListItem {...beratung} />
        ))}
      </SupportList>
      <CustomBox text={betrieblichesManagement.additionalText} />
    </Layout>
  )
}

const GreyBox = styled.div`
  background-color: var(--infoBox-color-lightgrey);
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  max-width: 880px;
  display: flex;
  flex-direction: column;
`

const TipBox = styled.section`
  text-align: center;
  margin: 20px 0;
  position: relative;
  max-width: 70%;
  background-color: #c8e5e2;
  border-radius: 15px;
  padding: 30px;
  align-self: center;
  display: flex;
`
const ColorBorder = styled.div`
  height: 100%;
  width: 10px;
  background-color: #006d77;
  border-radius: 15px 0 0 15px;
  position: absolute;
  top: 0;
  left: 0;
`

const HeadlineGreyBox = styled.h1`
  color: var(--font-color-blue);
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
  max-width: 880px;
`

const SupportHeadline = styled.h2`
  font-size: 1.2em;
  text-align: center;
  padding: 0 20px;
`

const SupportList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 20px;
`

const CustomBox = styled(GreyBoxContent)`
  max-width: 880px;
`
