import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

type BlogProps = {
  posts : Array<string>
}

const Blog: NextPage <BlogProps> = ({posts}) => {
  return (
    <div className=''>
      <Head>
        <title>Blog - Rootlab | NextJS Products (Typescript)</title>
        <meta name="description" content="Rootlab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack - Blog
        </h1>

        <p className=''>
          <code className=''>Typescript</code>
        </p>

        
      </main>

      <footer className=''>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            Rootstack
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Blog

export async function getServerSideProps() {
  const posts = 'Posts'
  return{
    props:{
      posts
    }
  }
}
