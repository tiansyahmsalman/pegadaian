import Head from 'next/head'
import NavbarHome from './navbarHome'
import NavbarDetail from './navbarDetail'
import Footer from './footer'

export default function Layout(props) {

  return (
    <>
      <Head>
        <title>Pegadaian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.name ? <NavbarDetail name={props.name}/> : <NavbarHome />}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}