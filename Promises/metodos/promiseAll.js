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

let pA = new Promise((resolve, reject) => time('A', 500, resolve));
let pB = new Promise((resolve, reject) => time('B', 300, resolve));
let pC = new Promise((resolve, reject) => time('C', 800, resolve));
let pD = new Promise((resolve, reject) => time('D', 400, resolve));
let pE = new Promise((resolve, reject) => time('E', 1000, resolve));

//A promise.all() esperou todas as promises serem resolvidas para retornar.
