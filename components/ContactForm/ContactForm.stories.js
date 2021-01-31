import ContactForm from './ContactForm'

export default {
  title: 'nordlichter/Contact Form',
  component: ContactForm,
}

const onSubmit = (data) => {
  console.log(data)
  setIsSend(true)
}

const Template = (args) => <ContactForm {...args} />

export const ContactFormExample = Template.bind({})
ContactFormExample.args = {
  onSubmit: () => {},
}
