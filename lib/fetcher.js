import axios from 'axios';

export const fetcher = async url => await axios(url).then(res => res.data);
