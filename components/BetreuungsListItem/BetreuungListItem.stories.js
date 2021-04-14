import BetreuungListItem from './BetreuungListItem'
import BeratungSVG from '../../assets/svgs/betrieblichesManagement/beratung.svg'
import Svg from '../util/Svg'

export default {
  title: 'nordlichter/Betriebliches Gesundheitsmanagment',
  component: BetreuungListItem,
}
const Template = (args) => <BetreuungListItem {...args} />

export const ListItemWithMoreInfos = Template.bind({})
ListItemWithMoreInfos.args = {
  description: 'Therapie am Arbeitsplatz',
  more_infos: ['Physiotherapie', 'Massage'],
  svg: (
    <Svg>
      <BeratungSVG />
    </Svg>
  ),
}
export const ListItemWithoutMoreInfos = Template.bind({})
ListItemWithoutMoreInfos.args = {
  description: 'Beratung und individuelle Konzepterstellung',
  svg: (
    <Svg>
      <BeratungSVG />
    </Svg>
  ),
}
