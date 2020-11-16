import Price from './Price'
import preise from '../../assets/api/api-preise'

export default {
  title: 'nordlichter/Price',
  component: Price,
}

const Template = (args) => <Price {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  isBest: true,
  length: '30min',
  color: '--font-color-blue',
  serviceName: 'Klassische Massage',
  price: '168',
  priceAdditional: '/6x',
  additionalInfos: '6 Behandlungen',
  arrow: '-6%',
}
