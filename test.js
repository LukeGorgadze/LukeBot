const fetch = require('node-fetch');

const url = 'https://api.chucknorris.io/jokes/random';

fetch(url)
	.then(res => res.json())
	.then(json => console.log(json.value));
