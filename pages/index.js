import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <nav className="menu" tabindex="0">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <h2>Portfolio</h2>
        </header>
        <ul>
          <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
        </ul>
      </nav>

      <main>
        <Image
          src="/image2.png"
          width={500}
          height={300}
          alt="there should be an image" />
      </main>

    </div>
  )
}
