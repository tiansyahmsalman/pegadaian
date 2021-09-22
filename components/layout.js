import Head from 'next/head'
import NavbarHome from './navbarHome'
import NavbarDetail from './navbarDetail'
import NavbarAccount from './navbarAccount'
import Footer from './footer'

export default function Layout(props) {

  return (
    <>
      <Head>
        <title>Pegadaian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.title === 'home' ? <NavbarHome /> : <></>}
      {props.title === 'detail' ? <NavbarDetail name={props.name} /> : <></>}
      {props.title === 'account' ? <NavbarAccount /> : <></>}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}