/**Blog Post Object
 * write a function for blog post with object literal  syntax
 *  
  title
  body
  author
  views
  comment: [{ author, body }
  isLive
 */

let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comment: [
    { author: 'a', body: 'b' },
    { author: 'c', body: 'd' },
  ],
  isLive: true,
};

console.log(post);
