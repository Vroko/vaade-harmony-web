import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        
        {/* Default meta tags (will be overridden by dynamic ones) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harmony.vaade.co/" />
        <meta property="og:title" content="VAADE Harmony - Music Ranking App" />
        <meta property="og:description" content="Discover and share music opinions" />
        <meta property="og:image" content="/icon.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harmony.vaade.co/" />
        <meta property="twitter:title" content="VAADE Harmony - Music Ranking App" />
        <meta property="twitter:description" content="Discover and share music opinions" />
        <meta property="twitter:image" content="/icon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 