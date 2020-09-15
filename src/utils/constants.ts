const HOMEPAGE = 'http://localhost:3000/oauth';
const KEY = '3edecd88a68ce35b7163a5095c37326e';
const AUTHORIZE_URL = `https://trello.com/1/authorize?return_url=${HOMEPAGE}&expiration=1day&name=TRELLO_APP&scope=read,write,account&response_type=token&key=${KEY}`;

const STORAGE_TOKEN = 'TOKEN';

export { AUTHORIZE_URL, STORAGE_TOKEN, KEY };
