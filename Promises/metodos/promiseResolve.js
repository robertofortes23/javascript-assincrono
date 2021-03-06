/* O método Promise.resolve(value) retorna um objeto Promise que é resolvido 
com o valor passado. Se o valor for thenable (ex: tiver um método "then"), 
a promise retornada irá "seguir" esse thenable, adotando seu estado final; 
se o valor for uma promise, o objeto será o resultado da chamada 
Promise.resolve; do contrário a promise será realizada com o valor. */

Promise.resolve("Success").then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});

//Tratando um array

var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});

//Resolvendo outra promise

var original = Promise.resolve(true);
var cast = Promise.resolve(original);
cast.then(function(v) {
  console.log(v); // true
});

