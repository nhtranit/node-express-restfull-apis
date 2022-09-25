function execCallBackFunc(name, callBack) {
  callBack(name);
}

function callBackFunction(name) {
  console.log(`Hello ${name}`);
}

execCallBackFunc("nhtran.it", callBackFunction);
