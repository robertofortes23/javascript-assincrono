/*Promise é um objeto usado para processamento assíncrono. 
Um Promise (de "promessa") representa um valor que pode estar disponível agora, 
no futuro ou nunca.*/

/*Isto permite que métodos assíncronos retornem valores como métodos síncronos: 
ao invés do valor final, o método assíncrono retorna uma promessa ao valor 
em algum momento no futuro.*/

// Criando uma promise
const p = new Promise((resolve, reject) => {
    try {
      resolve(funcaoX())
    } catch (e) {
      reject(e)
    }
  })
                        
// Executando uma promise
p.then((parametros) => console.log("Sucesso", parametros)).catch((erro) => console.log("Erro", erro));

// Tratando erros e sucessos no then
p.then(resposta => { /* tratar resposta */ }, erro => { /* tratar erro */ });

//====== Multiplas Ações ======//

const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('Fluxo')
    reject('Erro')
  })
  
  p.then(function acao1 (res) { console.log(`${res} da ação 1`); return res; })
  .then(function acao2 (res) { console.log(`${res} da ação 2`); return res; })
  .then(function acao3 (res) { console.log(`${res} da ação 3`); return res; })
  .catch(function erro (rej) { console.error(rej) })