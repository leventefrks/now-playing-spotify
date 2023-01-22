import { getTopTracks } from '../../lib/spotify';

const handler = async (req, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items?.map(({ name, artists, external_urls, album }) => ({
    title: name,
    artist: artists.map(_artist => _artist.name).join(', '),
    url: external_urls.spotify,
    coverImage: album.images[1],
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(tracks);
};

export default handler;
