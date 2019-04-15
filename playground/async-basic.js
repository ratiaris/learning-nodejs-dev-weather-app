const cb = require('./callback.js');

console.log('Starting app');

setTimeout(() => {
  console.log('Inside setTimeout callback');
}, 2000);

console.log('In between setTimeout');

setTimeout(() => {
  console.log('Inside second setTimeout callback');
}, 0);

cb.getUser(31,  (user) => {
  console.log(user);
});

console.log('Blah blah blah');

console.log('Finishing up');