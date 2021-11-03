import Layout from '../components/Layout'
import PersonnelFile from '../components/PersonnelFile/PersonnelFile'
import nordlichter from '../assets/api/api-nordlichter'
import Logo from '../components/Logo/Logo'
import BottomSVG from '../assets/svgs/nordlichter/nordlichter.svg'
import styled from 'styled-components'

export default function Nordlichter() {
  return (
    <Layout>
      <Headline>Unser Team stellt sich vor</Headline>
      <Wrapper>
        {nordlichter.map((nordlicht, index) => (
          <PersonnelFile key={index} {...nordlicht} />
        ))}
      </Wrapper>
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1092px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
