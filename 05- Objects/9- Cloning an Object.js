const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// using for_in
const anther = {};
for (let key in circle) {
  anther[key] = circle[key];
}

// using Object.assign(targetObject,sourceObject)
// we can also add key to targetObject
const anther2 = Object.assign({ color: 'yellow' }, circle);

//spreed operator
// it take all properties and method and put then between curly braces {...}
const anther3 = { ...circle };
