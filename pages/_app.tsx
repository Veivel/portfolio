import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppProvider } from '../components/layout/context/AppProvider';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
        });
    });

    return(
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}
