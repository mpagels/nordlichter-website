import ContactForm from './ContactForm'

const { register, handleSubmit, watch, errors } = useForm()
const onSubmit = (data) => console.log(data)

export default {
  title: 'nordlichter/Contact Form',
  component: ContactForm,
}

const Template = (args) => <ContactForm {...args} />

export const ContactForm = Template.bind({})
ContactForm.args = {
  onSubmit: handleSubmit(onSubmit),
}
