import NavBar from './NavBar'

export default {
  title: 'nordlichter/Navbar',
  component: NavBar,
}

const Template = (args) => <NavBar {...args} />

export const Navbar = Template.bind({})
Navbar.args = {
  router: '/leistungen',
}
