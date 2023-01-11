import {
  NEXT_SPOTIFY_NOW_PLAYING_ENDPOINT,
  NEXT_SPOTIFY_TOKEN_ENDPOINT,
  NEXT_SPOTIFY_TOP_TRACKS_ENDPOINT,
} from '../constants';
import queryString from 'query-string';

const {
  NEXT_SPOTIFY_CLIENT_ID: client_id,
  NEXT_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const getAccessToken = async () => {
  const response = await fetch(NEXT_SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const { access_token } = await response.json();
  return access_token;
};

export const getNowPlaying = async () => {
  const accessToken = await getAccessToken();

  return fetch(NEXT_SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getTopTracks = async () => {
  const accessToken = await getAccessToken();

  return fetch(NEXT_SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
