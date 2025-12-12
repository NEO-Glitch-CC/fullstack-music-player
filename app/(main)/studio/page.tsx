"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Studio = () => {
  const [query, setQuery] = useState<string>("Coldplay");
  const [musicData, setMusicData] = useState<MusicApiResponse>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArtist = async (artist: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/music?artist=${encodeURIComponent(artist)}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status} - ${text}`);
      }
      const json = await res.json();
      setMusicData(json);
    } catch (err: unknown) {
      console.error(err);
      setError((err as Error)?.message ?? "Unknown error");
      setMusicData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtist(query);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchArtist(query.trim());
  };

  const renderBiography = (bio?: string) => {
    if (!bio) return null;
    return bio.split(/\n\n+/).map((para, i) => (
      <p key={i} className="mb-3 text-sm leading-relaxed">
        {para}
      </p>
    ));
  }



  return (
    <main className="studio-hero min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white font-bold">MP</div>
            <div>
              <h1 className="text-2xl font-extrabold">Music Player</h1>
              <p className="text-sm text-muted-foreground">Discover artists, read bios, explore music.</p>
            </div>
          </div>
        </header>

        <section className="relative">
          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
            <div className="glass flex items-center gap-2 rounded-xl px-4 py-3 shadow-lg">
              <input
                aria-label="Search artist"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent placeholder:opacity-70 text-lg outline-none"
                placeholder="Search artist (e.g. Coldplay, One Direction)"
              />
              <button
                type="submit"
                className="brand-gradient-btn rounded-md px-4 py-2 text-white font-semibold shadow-md"
                disabled={loading}
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </form>

          {error && <div className="mt-4 text-red-600">Error: {error}</div>}

          <div className="mt-8">
            {!loading && musicData && (
              <div>
                {musicData.error ? (
                  <div className="text-sm text-red-500">API returned an error.</div>
                ) : (
                  (() => {
                    const artists = musicData.data?.artists;
                    if (!artists) return <div className="text-sm text-muted-foreground">No results found.</div>;
                    const artist = artists[0];
                    return (
                      <article className="studio-card glass overflow-hidden rounded-2xl p-6 shadow-xl">
                        <div className="md:flex md:items-start md:gap-6">
                          <div className="shrink-0">
                            {artist.strArtistThumb ? (
                              <Image
                                src={artist.strArtistThumb}
                                alt={`${artist.strArtist} thumbnail`}
                                width={220}
                                height={220}
                                className="h-44 w-44 rounded-xl object-cover"
                              />
                            ) : (
                              <div className="h-44 w-44 rounded-xl bg-muted-foreground/10 flex items-center justify-center">No image</div>
                            )}
                          </div>

                          <div className="mt-4 md:mt-0">
                            <h2 className="text-3xl font-extrabold">{artist.strArtist}</h2>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {artist.strGenre && <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">{artist.strGenre}</span>}
                              {artist.strStyle && <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium">{artist.strStyle}</span>}
                              {artist.intFormedYear && <span className="rounded-full bg-muted/10 px-3 py-1 text-sm">Formed {artist.intFormedYear}</span>}
                            </div>

                            <div className="mt-4 text-sm text-foreground/90 max-w-3xl">
                              {renderBiography(artist.strBiographyEN)}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                              {artist.strWebsite && (
                                <a
                                  href={artist.strWebsite.startsWith("http") ? artist.strWebsite : `https://${artist.strWebsite}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium"
                                >
                                  Website
                                </a>
                              )}
                              {artist.strFacebook && (
                                <a href={`https://${artist.strFacebook}`} target="_blank" rel="noreferrer" className="text-sm underline">Facebook</a>
                              )}
                              {artist.strTwitter && (
                                <a href={`https://${artist.strTwitter}`} target="_blank" rel="noreferrer" className="text-sm underline">Twitter</a>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })()
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Studio;