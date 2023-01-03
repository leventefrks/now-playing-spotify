import axios from 'axios';

export const fetcher = url => axios(url).then(res => res.data);
