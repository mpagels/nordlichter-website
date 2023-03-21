import Layout from '../components/Layout'
import LeistungenPage from '../components/Pages/Leistungen'

export default function Index({ blogEntries }) {
  return (
    <Layout>
      <LeistungenPage blogEntries={blogEntries} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:1337/api/blogeintrags?populate=*')
  const blogEntries = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogEntries: blogEntries.data,
    },
    revalidate: 10,
  }
}
