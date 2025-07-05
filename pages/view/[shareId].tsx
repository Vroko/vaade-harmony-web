import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Album } from '../../src/types'
import AlbumHeader from '../../src/components/AlbumHeader'
import SongList from '../../src/components/SongList'

interface ViewShareProps {
  album: Album | null
  shareId: string
  error?: string
}

export default function ViewShare({ album, shareId, error }: ViewShareProps) {
  if (error) {
    return (
      <>
        <Head>
          <title>Album Not Found - VAADE Harmony</title>
        </Head>
        <div className="p-8 text-center text-red-500">{error}</div>
      </>
    )
  }

  if (!album) {
    return (
      <>
        <Head>
          <title>Loading - VAADE Harmony</title>
        </Head>
        <div className="p-8 text-center">Loading...</div>
      </>
    )
  }

  const shareUrl = `https://harmony.vaade.co/view/${shareId}`
  const title = `${album.albumName} by ${album.albumArtists.join(", ")} - sharedBy ${album.sharedByUsername} - VAADE Harmony`
  const description = `${album.sharedByUsername}'s ranking of ${album.albumName} on VAADE Harmony`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={album.imageUrls[0]} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={album.imageUrls[0]} />
      </Head>
      
      <div className="bg-slate-900 text-white rounded-lg max-w-4xl mx-auto">
        <div className="w-full">
          {/* Album Header */}
          <AlbumHeader album={album} />

          {/* Song Lists */}
          <div className="bg-gray-800 rounded-b-lg p-8">
            <div className="mb-6 text-2xl font-semibold text-center">{album.sharedByUsername}'s Ranking</div>
            
            {/* Ranked Songs */}
            <div className="mb-8">
              <SongList songs={album.rankedSongs} showRank={true} />
            </div>

            {/* Unranked Songs */}
            {album.unrankedSongs.length > 0 && (
              <>
                <div className="mb-6 text-2xl font-semibold text-center">Unranked Songs</div>
                <SongList songs={album.unrankedSongs} showRank={false} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shareId } = context.params!
  
  try {
    const response = await fetch(`https://api.vaade.co/share/${shareId}`)
    
    if (!response.ok) {
      return {
        props: {
          album: null,
          shareId: shareId as string,
          error: "Could not load album"
        }
      }
    }
    
    const album = await response.json()
    
    return {
      props: {
        album,
        shareId: shareId as string
      }
    }
  } catch (error) {
    console.error('Error fetching share data:', error)
    return {
      props: {
        album: null,
        shareId: shareId as string,
        error: "Could not load album"
      }
    }
  }
} 