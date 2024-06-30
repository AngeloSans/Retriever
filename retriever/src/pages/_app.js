import React from 'react';
import Head from 'next/head';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
