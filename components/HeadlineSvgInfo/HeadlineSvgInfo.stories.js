import HeadlineSvgInfo from './HeadlineSvgInfo'
import verordnungen from '../../assets/api/api-verordnungen'

export default {
  title: 'nordlichter/HeadlineSvgInfo',
  component: HeadlineSvgInfo,
}

const Template = (args) => <HeadlineSvgInfo {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  headline: verordnungen.operationInfoNormal[0].headline,
  children: verordnungen.operationInfoNormal[0].svg,
  info: verordnungen.operationInfoNormal[0].info,
}
