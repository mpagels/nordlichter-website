import PersonnelFile from './PersonnelFile'
import nordlichter from '../../assets/api/api-nordlichter'

export default {
  title: 'nordlichter/PersonnelFile',
  component: PersonnelFile,
}

const Template = (args) => <PersonnelFile {...args} />

export const FullExample = Template.bind({})
FullExample.args = {
  profilfoto: nordlichter[0].profilfoto,
  name: nordlichter[0].name,
  fachbereich: nordlichter[0].fachbereich,
  person: nordlichter[0].person,
}
