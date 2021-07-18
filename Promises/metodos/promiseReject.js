/* O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com 
um dado motivo. Usado para fins de debug e captura de erros seletiva, é útil que 
o motivo seja uma instanceof Error.*/

Promise.reject("Testando reject estático").then(function(motivo) {
  // não executado
}, function(motivo) {
  console.log(motivo); // "Testando reject estático"
});

Promise.reject(new Error("falha")).then(function(erro) {
  // não executado
}, function(erro) {
  console.log(erro); // Stacktrace
});
