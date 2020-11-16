import Arrow from './Arrow'
import preise from '../../assets/api/api-preise'

export default {
  title: 'nordlichter/Price',
  component: Arrow,
}

const Template = (args) => <Arrow {...args} />

export const ArrowExample = Template.bind({})
ArrowExample.args = {
  percent: '6%',
}
