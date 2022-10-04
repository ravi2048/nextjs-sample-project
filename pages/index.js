import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>NextJs App</title>
        <meta name='keywords' content='nextjs, ssr, server-side-rendering'/>
      </Head>
      <h1>Articles List:</h1>
      <ArticleList articles = {articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const articles = await res.json();

  return {
      props: {
        articles
      }
    }
}