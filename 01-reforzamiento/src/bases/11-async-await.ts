import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'apiKey';

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
};

const getRandomGifUrl = async(): Promise<string> => {
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data}: GiphyRandomResponse = await response.json();

    return data.images.original.url;

};

//getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);