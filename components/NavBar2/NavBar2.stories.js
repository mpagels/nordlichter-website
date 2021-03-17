import NavBar2 from './NavBar2'

export default {
  title: 'nordlichter/Navbar/Navbar',
  component: NavBar2,
}

const Template = (args) => <NavBar2 {...args} />

export const Navbar = Template.bind({})
Navbar.args = {
  router: '/leistungen',
}