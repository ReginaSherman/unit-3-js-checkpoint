// examine the data in the art objects file
// use the artObjects variable below to answer the prompts below
const artObjects = require('./artobjects.json');

////////////////////////////////////////////////
// PROMPT 1
// Return an array that contains the titles of the art objects

const titles = artObjects.map((obj) => obj.title);
// console.log(titles);

////////////////////////////////////////////////
// PROMPT 2
// Return an array of objects that contains the long titles and artists (principalOrFirstMaker) as properties for each item
// Example: { title: 'Italian Landscape with a Draughtsman', artist: 'Jan Both' }

const titleAndArtistInfo = artObjects.reduce((acc, curVal) => {
	acc.push({ title: curVal.title, artist: curVal.principalOrFirstMaker });
	return acc;
}, []);
// console.log(titleAndArtistInfo);

////////////////////////////////////////////////
// PROMPT 3
// Return an array with strings of image elements that interpolate the webImage url as the src attribute and the title as the alt attribute
// Hint: an img in a string `<img src=${null} alt=${null} />`

const imageElements = artObjects.map((obj) => {
	return `<img src=${obj.webImage.url} alt=${obj.title} />`;
});
console.log(imageElements);
