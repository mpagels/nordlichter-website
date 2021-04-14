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
