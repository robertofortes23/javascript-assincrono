/* O método Promise.race(iterable) retorna uma promise que resolve ou rejeita 
assim que uma das promises no iterável resolver ou rejeitar, 
com o valor ou razão daquela promise. */

/* O método Promise.race faz exatamente o que o nome diz, ele recebe um array de 
Promises, inicia todas elas, a que retornar Primeiro vai ser o retorno do método 
por completo. Ele é um caso especial do Promise.all onde, ao invés de esperar todas 
as Promises serem resolvidas, simplesmente retorna o primeiro resultado que obtiver. */

const p1 = Promise.race([
  new Promise(resolve => setTimeout(resolve, 4000)),
  new Promise((resolve, reject) => setTimeout(reject, 8000))
])

const p2 = Promise.race([
  p1,
  new Promise(resolve => setTimeout(resolve, 6000)),
  new Promise(resolve => setTimeout(resolve, 10000)),
  new Promise((resolve, reject) => setTimeout(reject, 2000))
])

p2.then(result => console.log(result))
p2.catch(err => console.error(err))

/* Temos dois arrays de Promises, um deles é resolvido em 4s e depois rejeitado em 8s, 
enquanto o outro é rejeitado em 2s e depois resolvido em 6s e 10s. */
