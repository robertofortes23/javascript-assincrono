/* O método Promise.all(iterable) retorna uma única Promise que resolve quando 
todas as promises no argumento iterável forem resolvidas ou quando o iterável 
passado como argumento não contém promises. 
É rejeitado com o motivo da primeira promise que foi rejeitada. */

let time = (x, y, fn) => setTimeout(() => { fn(x) }, y);

Promise.all([ pA, pB, pC, pD, pE])
    .then(result => {
        console.log('Resultado da promise.all: ', result);
    })
    .catch(err => {
        console.warn('Failed: ', err);
    });
