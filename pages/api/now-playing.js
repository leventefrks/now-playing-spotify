import { getNowPlaying } from '../../lib/spotify.js';

export default async function handler(req, res) {
  const response = await getNowPlaying();
  const { status } = response;

  if (status === 204 || status > 400)
    return res.status(200).json({ isPlaying: false });

  const song = await response.json();

  if (song.item === null) return res.status(200).json({ isPlaying: false });

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const url = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    url,
    title,
  });
}
