function promiseFunction(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(name);
    } else {
      reject("Error, name is Empty");
    }
  });
}

promiseFunction("nhtran.it")
  .then((name) => console.log(`Hello ${name}`))
  .catch((err) => console.log(err));

promiseFunction("")
  .then((name) => console.log(`Hello ${name}`))
  .catch((err) => console.log(err));
