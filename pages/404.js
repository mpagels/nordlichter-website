import Layout from '../components/Layout'
import SVG404 from '../assets/svgs/404/404.svg'
import styled from 'styled-components'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <Wrapper>
        <StyledParagraph>
          Da ist was schief gelaufen. Klicke{' '}
          <Link href="/">
            <StyledAnchor>hier</StyledAnchor>
          </Link>
          , um auf die Startseite zu gelangen.
        </StyledParagraph>
        <StyledSVG />
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
`
const StyledParagraph = styled.h1`
  color: var(--font-color-darkgrey);
  margin: 40px 0;
  text-align: center;
  font-weight: 900;
  font-size: 1.2em;
`

const StyledSVG = styled(SVG404)`
  height: 300px;
  width: 300px;
  @media (min-width: 767px) {
    height: 500px;
    width: 500px;
  }
  @media (max-width: 606px) {
    height: 150px;
    width: 150px;
  }
`

const StyledAnchor = styled.a`
  color: var(--font-color-blue);
  cursor: pointer;
`
