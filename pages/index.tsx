import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Landing from '../modules/landing'
import { useContext } from 'react'
import { AppContext } from '../components/layout/context/AppProvider'
import Hamburger from '../components/layout/Hamburger'
import Drawer from '../components/layout/Drawer'
import Footer from '../components/layout/Footer'
import Script from 'next/script'
import CustomNav from '../components/layout/CustomNav'

const personSchema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Givarrel Veivel Pattiwael",
    "url": "https://veivelp.com/",
    "image": "https://veivelp.com/_next/image?url=%2Fme-1x1.jpg&w=3840&q=75",
    "sameAs": [
        "https://www.linkedin.com/in/veivel/",
        "https://github.com/veivel/",
        "https://veivelp.com/"
    ],
    "jobTitle": "Computer Science Student",
    "worksFor": {
        "@type": "Organization",
        "name": "Universitas Indonesia"
    },
}

const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-YBVSXDC89Z');
`

export default function Home() {

    return (
        <>
            <Head>
                <title>{"Veivel's Portfolio"}</title>
                <meta name="description" content="Givarrel Veivel Pattiwael's web portfolio — I do tech stuff. "/>
                <meta name="author" content="Givarrel Veivel Pattiwael"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Computer Science, Software Engineer, Data Engineer, Indonesia, Veivel"></meta>
                <link rel="icon" href="/code2.ico" />
            </Head>

            {/* Google tag (gtag.js), read: https://nextjs.org/docs/messages/next-script-for-ga */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-YBVSXDC89Z"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {googleAnalyticsScript}
            </Script>

            {/* Person Schema of Veivel for SEO */}
            <Script id="person-schema" type="application/ld+json">
                {JSON.stringify(personSchema)}
            </Script>

            <Hamburger />
            <Drawer />
            {/* <CustomNav /> */}
            
            <Landing />
            <Footer />
        </>
    )
}
