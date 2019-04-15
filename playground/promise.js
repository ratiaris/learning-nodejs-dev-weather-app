let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Unable to fulfill promise');
    resolve('Hey, it worked!');
    resolve();
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success:', message);
}, (errorMessage) => {
  console.log('Error:', errorMessage);
});

let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }
      else {
        reject('Arguments must be number!');
      }
    }, 2500);
  });
};

asyncAdd(6, 7).then((result) => {
// asyncAdd(6, '7').then((result) => {
  console.log('Result: ' + result);
  return asyncAdd(result, '33');
  // return asyncAdd(result, 33);
}).then((result) => {
  console.log('Should be 46: ' + result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});