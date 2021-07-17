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
