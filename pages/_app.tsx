import type { AppProps } from 'next/app'
import { useEffect } from 'react';
// import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
    // useEffect(() => {
    //     AOS.init({
    //         easing: 'ease-out-cubic',
    //         once: true,
    //         offset: 50,
    //         delay: 50,
    //     });
    // }, []);

    return(
        <>
            <Component {...pageProps} />
        </>
    );
}
