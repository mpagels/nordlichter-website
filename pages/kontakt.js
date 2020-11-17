import Layout from '../components/Layout'
import kontakt from '../assets/api/api-kontakt'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import Logo from '../components/Logo/Logo'
import { useForm } from 'react-hook-form'

export default function Kontakt() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Layout>
      <Logo />
      {kontakt.map((element) => (
        <HeadlineSvgInfo headline={element.headline} info={element.info}>
          {element.svg}
        </HeadlineSvgInfo>
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name="example" defaultValue="test" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input name="exampleRequired" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Layout>
  )
}
