
import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

export default function _document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
