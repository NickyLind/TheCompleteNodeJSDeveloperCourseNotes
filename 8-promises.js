// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([7, 4, 1]);
//     reject('Something went wrong.');
//   }, 2000);
// });

// doWorkPromise.then((result) => {
//   console.log(`Success: ${result}`);
// }).catch((error) => {
//   console.log(`Error: ${error}`);
// });

//! 
//!                              fulfilled
//!                             /
//! Promise   ---- pending --->
//!                             \
//!                              rejected
//! 

//? ~~~~~~~~~~~~~~~ PROMISE CHAINING ~~~~~~~~~~~~

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000);
  })
};

//! bad example of callback hell
// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(3, 4)
//     .then((sum) => {
//       console.log(sum);
//     })
//     .catch((e) => {
//       console.log(e);
//     })
//   })
//   .catch((e) => {
//     console.log(e);
//   })

//* Promise Chaining
add(1,1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4)
    //? return the new promise so the .then() method can be called/chained onto the parent Promise
  })
  .then((sum2) => {
    console.log(sum2);
    return add(sum2, 6)
  })
  .then((sum3) => {
    console.log(sum3);
  })
  .catch((e) => {
    console.log(e);
  })