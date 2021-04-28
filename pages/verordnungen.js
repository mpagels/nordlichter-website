import Layout from '../components/Layout'
import styled from 'styled-components'
import HeadlineWithSvg from '../components/HeadlineWithSvg/HeadlineWithSvg'
import TreeWaySvg from '../assets/svgs/verordnungen/tree-way.svg'
import verordnungen from '../assets/api/api-verordnungen'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import GreyContentBox from '../components/GreyContextBox/GreyContentBox'
import SubHeadlineWithInfo from '../components/SubHeadlineWithInfo/SubHeadlineWithInfo'
import BottomSvg from '../assets/svgs/verordnungen/verordnung-ende.svg'

export default function Verordnungen() {
  return (
    <Layout>
      <HeadlineWithSvg headline={'Behandlungen nach ärztlicher Verordnung'}>
        <TreeWaySvg />
      </HeadlineWithSvg>
      <GreyContentBox text={verordnungen.greyContent} />
      <SubHeadlineWithInfo {...verordnungen.firstInfo} />
      <PrescriptionWrapper>
        {verordnungen.operationInfoNormal.map(({ headline, svg, info }) => (
          <HeadlineSvgInfo headline={headline} info={info}>
            {svg}
          </HeadlineSvgInfo>
        ))}
      </PrescriptionWrapper>
      <GreyContentBox text={verordnungen.privatInfoBox} />
      <PrescriptionWrapper>
        {verordnungen.operationInfoPrivat.map(({ headline, svg, info }) => (
          <HeadlineSvgInfo headline={headline} info={info}>
            {svg}
          </HeadlineSvgInfo>
        ))}
      </PrescriptionWrapper>
      <GreyContentBox text={verordnungen.attention} />
      <BottomSvg style={bottomSvgStyle} />
    </Layout>
  )
}

const bottomSvgStyle = {
  position: 'relative',
  bottom: '-2px',
  marginTop: '20px;',
}

const PrescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 20px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
