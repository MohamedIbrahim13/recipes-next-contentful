import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5500)
  }, [])
  return (
    <>
      <Head>
        <title>404 | Error</title>
        <meta name="description" content="Eat and spread the joy" />
      </Head>
      <div className="not-found">
        <h1>404</h1>
        <h2>Ooops! Page not found :(</h2>
        <p>
          Back to <Link href="/">Home page</Link>
        </p>
        <style jsx>{`
          .not-found {
            background: #fff;
            padding: 30px;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            transform: rotateZ(-1deg);
          }
          h1 {
            font-size: 2.5rem;
          }
        `}</style>
      </div>
    </>
  )
}

export default NotFound
