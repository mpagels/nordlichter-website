import GreyContentBox from './GreyContentBox'
import verordnungen from '../../assets/api/api-verordnungen'

export default {
  title: 'nordlichter/GreyContentBox',
  component: GreyContentBox,
}

const Template = (args) => <GreyContentBox {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  text: verordnungen.greyContent,
}
