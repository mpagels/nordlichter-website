import SubHeadlineWithInfo from './SubHeadlineWithInfo'
import verordnungen from '../../assets/api/api-verordnungen'

export default {
  title: 'nordlichter/SubHeadlineWithInfo',
  component: SubHeadlineWithInfo,
}

const Template = (args) => <SubHeadlineWithInfo {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  headline: verordnungen.firstInfo.headline,
  info: verordnungen.firstInfo.info,
}
