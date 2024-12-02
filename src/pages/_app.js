import '../css/main.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9345699029057065"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
