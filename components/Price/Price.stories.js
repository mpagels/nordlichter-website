import Price from './Price'
import preise from '../../assets/api/api-preise'

export default {
  title: 'nordlichter/Price',
  component: Price,
}

const Template = (args) => <Price {...args} />

export const BuyThisExample = Template.bind({})
BuyThisExample.args = {
  isBest: true,
  length: '30min',
  color: '--font-color-blue',
  serviceName: 'Klassische Massage',
  price: '168',
  priceAdditional: '/6x',
  additionalInfos: '6 Behandlungen',
  arrow: '-6%',
}

export const NormalExample = Template.bind({})
NormalExample.args = {
  length: '30min',
  color: '--headcolor-services-normal',
  serviceName: 'Klassische Massage',
  price: '30',
  additionalInfos: 'Einmalige Behandlung',
}
export const SecondBest = Template.bind({})
SecondBest.args = {
  length: '30min',
  color: '--headcolor-services-second',
  serviceName: 'Klassische Massage',
  price: '275',
  priceAdditional: '/10x',
  additionalInfos: '10 Behandlungen',
  arrow: '-9%',
}
