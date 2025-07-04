import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harmony | VAADE - The Music Ranking App</title>
        <meta name="description" content="Discover and share music opinions with VAADE Harmony" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              VAADE Harmony
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The Music Ranking App
            </p>
            <p className="text-gray-700">
              Discover and share music opinions
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 