const doWorkProvider = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 4, 7]);
    reject("Things went wrong");
  }, 2000);
});

doWorkProvider
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
