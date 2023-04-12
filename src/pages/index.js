import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from './LandingPage'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [progress, setProgress] = useState(100)
  const router=useRouter();
  useEffect(() => {

    const handleRouteChangeSt = (url, { shallow }) => {
      setTimeout(() => {
        setProgress(75);
      }, 100);
    };
    
    const handleRouteChangeCp = (url, { shallow }) => {
      setTimeout(() => {
        setProgress(100);
      }, 100);
    };

    router.events.on('routeChangeStart', handleRouteChangeSt);
    router.events.on('routeChangeComplete', handleRouteChangeCp);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeSt);
      router.events.off('routeChangeComplete', handleRouteChangeCp);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>All-in-One Calculator App | Developed by P2P Clouds</title>
        <meta name="description" content="Get access to all types of calculators, including religious, financial, and health calculators, with our all-in-one calculator app developed by P2P Clouds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="calculator app, all-in-one calculator, religious calculator, financial calculator, health calculator, P2P Clouds" />
        <meta name='author' content='P2P Clouds'/>
        <link rel="icon" href="/p2plogo.png" />
      </Head>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <LandingPage/>
      <main className={styles.main}>
      </main>
    </>
  )
}
