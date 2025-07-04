export interface Artist {
    name: string;
}

export interface Song {
    id: string;
    name: string;
    artists: Artist[];
    durationMs: number;
    rank: number;
}

export interface Album {
    albumName: string;
    albumArtists: string[];
    imageUrls: string[];
    sharedByUsername: string;
    albumScore: number;
    rankedSongs: Song[];
    unrankedSongs: Song[];
    platformId: string;
}