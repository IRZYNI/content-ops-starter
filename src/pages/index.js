import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9345699029057065"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <h1>Welcome to My Website</h1>
            <p>This is the content of the home page.</p>

            {/* Ad Placement */}
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9345699029057065"
                data-ad-slot="5356555498"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </>
    );
}
