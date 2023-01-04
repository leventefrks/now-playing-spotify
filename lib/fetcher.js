import axios from 'axios';

export const fetcher = async url => axios(url).then(res => res.data);
