import Head from 'next/head'
import Navbar2 from './NavBar2/NavBar2'
import Footer from './Footer/Footer'
import styled from 'styled-components'
import Background from './BackGroundAnchor/BackGroundAnchor'
import AnnouncementBanner from './Announcement/AnnouncementBanner'
export default function Layout({ children }) {
  const appTitle = 'Nordlichter Halstenbek'

  return (
    <LayoutWrapper>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnnouncementBanner />
      <Background />
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
