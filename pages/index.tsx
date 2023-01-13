import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Landing from '../modules/landing'
import { useContext } from 'react'
import { AppContext } from '../components/layout/context/AppProvider'
import Hamburger from '../components/layout/Hamburger'
import Drawer from '../components/layout/Drawer'
import Footer from '../components/layout/Footer'
import Script from 'next/script'

export default function Home() {

    return (
        <>
            <Head>
                <title>{"Veivel's Portfolio"}</title>
                <meta name="description" content="Givarrel Veivel Pattiwael's web portfolio — I do tech stuff. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Google tag (gtag.js), read: https://nextjs.org/docs/messages/next-script-for-ga */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-YBVSXDC89Z"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-YBVSXDC89Z');
                `}
            </Script>
        

            <Hamburger />
            <Drawer />
            <Landing />
            <Footer />
        </>
    )
}
