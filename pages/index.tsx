import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Landing from '../modules/landing'
import { useContext } from 'react'
import { AppContext } from '../components/layout/context/AppProvider'
import Hamburger from '../components/layout/Hamburger'
import Drawer from '../components/layout/Drawer'

export default function Home() {

    return (
        <>
            <Head>
                <title>{"Veivel's Landing"}</title>
                <meta name="description" content="Givarrel Veivel Pattiwael's web portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hamburger />
            <Drawer />
            <Landing />
        </>
    )
}
