import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'

export default function Partner() {
  const appTitle = 'Die Nordlichter - Unser Partner'
  return (
    <Layout>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Headline>Unsere Partner</Headline>

      <Wrapper>
        <ParterItems>
          <PartnerHeader>Nordlichter Wedel</PartnerHeader>
          <Image
            alt="Nordlichter logo"
            src="/images/NordlichterWedel-big.png"
            width={250}
            height={68.21}
          />
          <Link
            href="https://www.nordlichter-wedel.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.nordlichter-wedel.de
          </Link>
        </ParterItems>
        <ParterItems>
          <PartnerHeader>
            Ernährungsberatung und Lauftraining – Sonja Brüggemann
          </PartnerHeader>
          <Image
            alt="Sonja Brüggemann logo"
            src="/images/sonja.webp"
            width={250}
            height={121.71}
          />
          <Link
            href="https://www.bunter-gesunder-mix.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.bunter-gesunder-mix.de/
          </Link>
        </ParterItems>
        <ParterItems>
          <PartnerHeader>Chiropraktik – Sarah Gampe</PartnerHeader>
          <Image
            alt="Sonja Brüggemann logo"
            src="/images/sarah-gampe.jpg"
            width={200}
            height={200}
          />
          <Link
            href="https://www.chiropraktik-norderstedt.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.chiropraktik-norderstedt.de/
          </Link>
        </ParterItems>
      </Wrapper>
    </Layout>
  )
}

const Link = styled.a`
  color: var(--font-color-blue);
`

const PartnerHeader = styled.h2`
  text-align: center;
`

const ParterItems = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Headline = styled.h1`
  color: var(--font-color-darkgrey);
  font-weight: 900;
  text-align: center;
  font-size: 2em;
`

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  margin-bottom: 30px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1092px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
