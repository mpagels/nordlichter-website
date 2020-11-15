import Layout from '../components/Layout'
import HeadlineWithSvg from '../components/HeadlineWithSvg/HeadlineWithSvg'
import Logo from '../components/Logo/Logo'
import TreeWaySvg from '../assets/svgs/verordnungen/tree-way.svg'
import verordnungen from '../assets/api/api-verordnungen'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import GreyContentBox from '../components/GreyContextBox/GreyContentBox'
import SubHeadlineWithInfo from '../components/SubHeadlineWithInfo/SubHeadlineWithInfo'
import BottomSvg from '../assets/svgs/verordnungen/verordnung-ende.svg'

export default function Verordnungen() {
  return (
    <Layout>
      {/* <Logo /> */}
      <HeadlineWithSvg headline={'Behandlungen nach ärztlicher Verordnung'}>
        <TreeWaySvg />
      </HeadlineWithSvg>
      <GreyContentBox text={verordnungen.greyContent} />
      <SubHeadlineWithInfo {...verordnungen.firstInfo} />
      {verordnungen.operationInfoNormal.map(({ headline, svg, info }) => (
        <HeadlineSvgInfo headline={headline} info={info}>
          {svg}
        </HeadlineSvgInfo>
      ))}
      <GreyContentBox text={verordnungen.privatInfoBox} />
      {verordnungen.operationInfoPrivat.map(({ headline, svg, info }) => (
        <HeadlineSvgInfo headline={headline} info={info}>
          {svg}
        </HeadlineSvgInfo>
      ))}
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
