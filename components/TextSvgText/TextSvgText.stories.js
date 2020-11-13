import TextSvgText from './TextSvgText'
import leistungen from '../../assets/api/api-leistungen'

export default {
  title: 'nordlichter/Leistungen/TextSvgText',
  component: TextSvgText,
}

const Template = (args) => <TextSvgText {...args} />

export const Termin = Template.bind({})
Termin.args = {
  firstText: leistungen.infoTexts[0].firstText,
  children: leistungen.infoTexts[0].svg,
  secondText: leistungen.infoTexts[0].secondText,
}
export const Training = Template.bind({})
Training.args = {
  firstText: leistungen.infoTexts[1].firstText,
  children: leistungen.infoTexts[1].svg,
  secondText: leistungen.infoTexts[1].secondText,
}
export const Food = Template.bind({})
Food.args = {
  firstText: leistungen.infoTexts[2].firstText,
  children: leistungen.infoTexts[2].svg,
  secondText: leistungen.infoTexts[2].secondText,
}
export const Relax = Template.bind({})
Relax.args = {
  firstText: leistungen.infoTexts[3].firstText,
  children: leistungen.infoTexts[3].svg,
  secondText: leistungen.infoTexts[3].secondText,
}