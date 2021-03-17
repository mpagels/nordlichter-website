import Head from 'next/head'
import Navbar2 from './NavBar2/NavBar2'
import Footer from './Footer/Footer'
import styled from 'styled-components'

export default function Layout({ children }) {
  const appTitle = 'Nordlichter Halstenbek'

  return (
    <LayoutWrapper>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar2 />
      <Content>{children}</Content>
      
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
