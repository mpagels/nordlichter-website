import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de'
import Layout from '../../components/Layout'
import ButtonToContactForm from '../../components/ButtonToContactForm/ButtonToContactForm'
dayjs.locale('de')

dayjs.extend(relativeTime)

export default function Blog({ data, mainPage }) {
  return (
    <>
      <Head>
        <title>Nordlichter Blog</title>
        <meta
          name="description"
          content="Nordlichter Blog - Alle Themen um Physiotherapie. Direkt von unseren Mitarbeitern."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Wrapper>
          {data.data.length === 0 ? (
            <div>
              <div>Keine Blogeinträge gefunden</div>
              <ButtonToContactForm toContactForm />
            </div>
          ) : mainPage ? (
            <>
              <BlogOverallHeader>
                <h2>
                  Die Nordlichter <br />
                  Community
                </h2>
                <BlogHeaderInfoText>
                  Willkommen in der Nordlichter Community – dem Ort für
                  informativen Physio-Austausch. Hier bekommst du alle News,
                  rund um die Nordlichter: Termine, Events, Physio-Knowledge,
                  sowie Tipps und Tricks von unserem Team, damit du gesund
                  bleibst. Viel Spaß!
                </BlogHeaderInfoText>
              </BlogOverallHeader>
              <ButtonToContactForm toContactForm />
              <BlogList>
                {data.data.map((blogEntry) => {
                  return (
                    <BlogListItem key={blogEntry.id}>
                      <div>
                        <BlogTitle>{blogEntry.attributes.Title}</BlogTitle>
                        <ImageSizeWrapper>
                          <Image
                            height="200"
                            width="352"
                            src={`http://localhost:1337${blogEntry.attributes.Media.data.attributes.formats.medium.url}`}
                            alt=""
                          />
                        </ImageSizeWrapper>
                      </div>
                      <BlogItemDetails>
                        <Author>Autor: {blogEntry.attributes.Verfasser}</Author>
                        <CreatedAt>
                          Erstellt{' '}
                          {dayjs(
                            blogEntry.attributes.Erstellungszeitunkt
                          ).fromNow()}
                        </CreatedAt>
                        <ReactMarkdown>
                          {blogEntry.attributes.Preview}
                        </ReactMarkdown>
                        <Link href={blogEntry.attributes.slug}>
                          Mehr lesen...
                        </Link>
                      </BlogItemDetails>
                    </BlogListItem>
                  )
                })}
              </BlogList>
            </>
          ) : (
            <FullBlogEntry>
              <LinkWrapper>
                <Link href="/blog">
                  <a>Zurück zum Blog</a>
                </Link>
              </LinkWrapper>
              <BlogTitle>{data.data[0].attributes.Title}</BlogTitle>
              <Image
                height="512"
                width="900"
                src={`http://localhost:1337${data.data[0].attributes.Media.data.attributes.formats.medium.url}`}
                alt=""
              />
              <Author>Autor: {data.data[0].attributes.Verfasser}</Author>
              <CreatedAt>
                Erstellt{' '}
                {dayjs(data.data[0].attributes.Erstellungszeitunkt).fromNow()}
              </CreatedAt>
              <ReactMarkdown>{data.data[0].attributes.Text}</ReactMarkdown>
              <Link href="/blog">
                <a>Zurück zum Blog</a>
              </Link>
            </FullBlogEntry>
          )}
        </Wrapper>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx

  if (Object.keys(query).length === 0) {
    try {
      const response = await fetch(
        'http://localhost:1337/api/blogeintrags?populate=*'
      )
      const data = await response.json()
      return {
        props: { data, mainPage: true },
      }
    } catch (e) {
      return {
        props: { data: { data: [] }, mainPage: true },
      }
    }
  } else {
    const { slug } = query
    const [blogSlug] = slug
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogeintrags?filters[slug][$eq]=${blogSlug}&populate=*`
      )
      const data = await response.json()
      return {
        props: { data, mainPage: false },
      }
    } catch (e) {
      return {
        props: { data: { data: [] }, mainPage: false },
      }
    }
  }
}

const Author = styled.h3`
  font-size: 0.8em;
  margin-bottom: 0;
`

const BlogHeaderInfoText = styled.p`
  max-width: 480px;
`

const BlogOverallHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 880px;

  @media (max-width: 841px) {
    flex-direction: column;
    max-width: auto;
    padding: 0 1em;
    max-width: 480px;
  }
`

const BlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 352px);
  list-style: none;
  gap: 30px;
  padding: 0;

  @media (max-width: 841px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0 1em;
    max-width: 480px;
  }
`

const BlogItemDetails = styled.div`
  & > h2 {
    display: none;
    @media (max-width: 841px) {
      display: inline;
    }
  }
`

const BlogListItem = styled.li`
  @media (max-width: 841px) {
    display: flex;
    flex-direction: column;
  }
`

const BlogTitle = styled.h2`
  @media (max-width: 841px) {
    font-size: 1.1em;
  }
`
const CreatedAt = styled.h4`
  font-size: 0.8em;
  margin-top: 5px;
`

const FullBlogEntry = styled.div`
  padding: 0 15px;

  & > a {
    margin: 0 0 200px 0;
  }
`

const ImageSizeWrapper = styled.div`
  @media (max-width: 841px) {
    display: flex;
    justify-content: start;
  }
`

const LinkWrapper = styled.div`
  margin: 0 0 12px 0;
  font-size: 0.8em;
`

const PreviewText = styled.p`
  @media (max-width: 841px) {
    font-size: 0.9em;
  }
`

const Wrapper = styled.div`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  @media (max-width: 841px) {
    padding: 0 0;
  }
`
