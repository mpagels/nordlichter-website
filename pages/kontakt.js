import Layout from '../components/Layout'
import kontakt from '../assets/api/api-kontakt'
import HeadlineSvgInfo from '../components/HeadlineSvgInfo/HeadlineSvgInfo'
import Logo from '../components/Logo/Logo'

export default function Kontakt() {
  return (
    <Layout>
      <Logo />
      {kontakt.map((element) => (
        <HeadlineSvgInfo headline={element.headline} info={element.info}>
          {element.svg}
        </HeadlineSvgInfo>
      ))}
    </Layout>
  )
}
