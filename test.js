const fetch = require('node-fetch');
const url = 'https://v2.jokeapi.dev/joke/Any';


// fetch(url, settings)
// 	.then(res => res.json())
// 	.then((json) => {
// 		json;
// 	});
fetch(url)
	.then(res => res.json())
	.then(json => {
		if (json.type === 'twopart') {
			console.log(json.setup);
			console.log(json.delivery);
		}
		else {
			console.log(json.joke);
		}
	});