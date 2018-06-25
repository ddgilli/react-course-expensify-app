const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'David',
    //   age: 66
    // });
    reject('something went wrong');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error', error);
});

//can also do it this way but the catch block is not obvious so it's confusing
// promise.then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log('error', error);
// });

console.log('after');
