import Price2 from './Price2'
import preise from '../../assets/api/api-preise'

export default {
  title: 'nordlichter/Price',
  component: Price2,
}

const Template = (args) => <Price2 {...args} />

export const SchmerzAde = Template.bind({})
SchmerzAde.args = {
  ...preise.newServices.massages[0],
}
