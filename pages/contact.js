import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './layout'

export default function Contact() {

  return (
    <Layout>
    <div className={styles.container}>
      <Head>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ margin: 0 }}>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WV7GHFL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
        <main className={styles.main}>

          <h1 className={styles.title}>
            Contato
          </h1>
        </main>
      </body>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
</Layout>
  )
}
