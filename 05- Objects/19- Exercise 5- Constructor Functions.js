/**Blog Post Object
 * Convert port to object to constructor function
 * note : default value of
 *  views:0
 * comment:[]
 * isLive:false
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

let post2 = new Post('a', 'b', 'c');
console.log(post2);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}
