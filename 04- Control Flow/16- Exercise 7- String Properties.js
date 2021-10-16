/**String Properties
 * create a function name showProperties(obj) take object as a parameters
 * return all properties of that obj that of type string
 */

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
