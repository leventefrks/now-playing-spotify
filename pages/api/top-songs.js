import { getTopTracks } from '../../lib/spotify';

export default async (req, res) => {
  const { items } = await getTopTracks();

  const tracks = items?.slice(0, 3).map(track => ({
    artist: track.artists.map(_artist => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};
