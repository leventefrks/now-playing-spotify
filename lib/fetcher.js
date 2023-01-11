export const fetcher = async url => await fetch(url).then(res => res.json());
