import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from './Home.module.css'
import styled from 'styled-components'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/de'
import Layout from '../../components/Layout'
dayjs.locale('de')

dayjs.extend(relativeTime)

const BlogOverallHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const BlogHeaderInfoText = styled.p`
  max-width: 480px;
`

export default function Blog({ data, mainPage }) {
  const router = useRouter()
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
        <div className={styles.container}>
          <main className={styles.main}>
            {data.data.length === 0 ? (
              <div>
                <div>Keine Blogeinträge gefunden</div>
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
                <ul className={styles.blogList}>
                  {data.data.map((blogEntry) => {
                    return (
                      <li key={blogEntry.id}>
                        <h2>{blogEntry.attributes.Title}</h2>
                        <Image
                          height="200"
                          width="352"
                          src={`http://localhost:1337${blogEntry.attributes.Media.data.attributes.formats.medium.url}`}
                          alt=""
                        />
                        <h3 className={styles.autor}>
                          Autor: {blogEntry.attributes.Verfasser}
                        </h3>
                        <h4 className={styles.createdDate}>
                          Erstellt{' '}
                          {dayjs(
                            blogEntry.attributes.Erstellungszeitunkt
                          ).fromNow()}
                        </h4>
                        <p>{blogEntry.attributes.Preview}</p>
                        <Link href={blogEntry.attributes.slug}>
                          Mehr lesen...
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            ) : (
              <div className={styles.fullBlogEntry}>
                <Image
                  height="512"
                  width="900"
                  src={`http://localhost:1337${data.data[0].attributes.Media.data.attributes.formats.medium.url}`}
                  alt=""
                />
                <h3 className={styles.autor}>
                  Autor: {data.data[0].attributes.Verfasser}
                </h3>
                <h4 className={styles.createdDate}>
                  Erstellt{' '}
                  {dayjs(data.data[0].attributes.Erstellungszeitunkt).fromNow()}
                </h4>
                <ReactMarkdown>{data.data[0].attributes.Text}</ReactMarkdown>
                <button type="button" onClick={() => router.back()}>
                  Click here to go back
                </button>
              </div>
            )}
          </main>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx

  if (Object.keys(query).length === 0) {
    const response = await fetch(
      'http://localhost:1337/api/blogeintrags?populate=*'
    )
    const data = await response.json()
    console.log(data)
    return {
      props: { data, mainPage: true },
    }
  } else {
    const { slug } = query
    const [blogSlug] = slug
    const response = await fetch(
      `http://localhost:1337/api/blogeintrags?filters[slug][$eq]=${blogSlug}&populate=*`
    )
    const data = await response.json()
    return {
      props: { data, mainPage: false },
    }
  }
}
