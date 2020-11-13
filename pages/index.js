import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/leistungen')
  }
  return <Layout />
}
