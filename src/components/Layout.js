import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
