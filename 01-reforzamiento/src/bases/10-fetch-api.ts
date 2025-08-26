const API_KEY = 'apiKey';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

myRequest
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        document.body.append(imageElement);
    })
    .catch((err) => {
        console.error(err);
    });