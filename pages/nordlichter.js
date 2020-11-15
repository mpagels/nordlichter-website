import Layout from '../components/Layout'
import PersonnelFile from '../components/PersonnelFile/PersonnelFile'
import nordlichter from '../assets/api/api-nordlichter'
import Logo from '../components/Logo/Logo'
import BottomSVG from '../assets/svgs/nordlichter/nordlichter.svg'
import styled from 'styled-components'

export default function Nordlichter() {
  return (
    <Layout>
      <Logo />
      <Headline>Unser Team stellt sich vor</Headline>
      {nordlichter.map((nordlicht, index) => (
        <PersonnelFile key={index} {...nordlicht} />
      ))}
      <BottomSVG style={customSvgStyle} />
    </Layout>
  )
}

const customSvgStyle = {
  /*   marginTop: '150px', */
  marginBottom: '20px',
}

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  font-weight: 900;
  text-align: center;
  font-size: 1.4em;
`
