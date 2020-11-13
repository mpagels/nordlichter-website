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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
        </style>
      </Head>
      {/* <Navbar /> */}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`
