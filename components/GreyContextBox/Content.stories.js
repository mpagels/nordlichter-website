import Content from './Content'
import verordnungen from '../../assets/api/api-verordnungen'

export default {
  title: 'nordlichter/GreyContentBox',
  component: Content,
}

const Template = (args) => <Content {...args} />

export const TextExample = Template.bind({})
TextExample.args = {
  text: verordnungen.greyContent,
}
