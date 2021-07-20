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
