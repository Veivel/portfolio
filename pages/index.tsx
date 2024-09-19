import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

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

            {/* Person Schema of Veivel for SEO */}
            <Script id="person-schema" type="application/ld+json">
                {JSON.stringify(personSchema)}
            </Script>

            <h1>hi there!</h1>
            <p>i{"'"}m planning to rewrite this website soon.</p>

            <p>in the meantime, may i interest you in any of the following links?</p>
            <ul>
                <li><Link href={"https://blog.veivelp.com"}>my blog</Link></li>
                <li><Link href={"https://linkedin.com/in/veivel"}>my linkedin</Link></li>
                <li><Link href={"https://github.com/Veivel"}>my github</Link></li>
            </ul>
            <p>you can contact me via linkedin! or, alternatively: <i>givarrel.veivel [at] ui.ac.id</i></p>
        </>
    )
}
