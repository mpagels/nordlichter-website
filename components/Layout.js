import Head from 'next/head'
import Navbar from './NavBar/NavBar'
import styled from 'styled-components'
import WelcomeAttentionMsg from './WelcomeAttentionMsg/WelcomeAttentionMsg'

export default function Layout({ children }) {
  const appTitle = 'Nordlichter Halstenbek'

  return (
    <LayoutWrapper>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <Content>{children}</Content>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`
