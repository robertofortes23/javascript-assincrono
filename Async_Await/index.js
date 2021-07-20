/* A palavra “async” antes de uma função significa uma coisa simples: uma função 
sempre retorna uma promessa. Outros valores são incluídos em uma promessa 
resolvida automaticamente. */

async function funcao() {
    return 1;
}

funcao().then(alert); // 1

/* A palavra-chave "await" faz o JavaScript esperar até que a promessa seja 
estabelecida e retorne seu resultado. */

// funciona apenas dentro de funções assíncronas
let value = await promise;

/* await literalmente suspende a execução da função até que a promessa seja 
concluída e, em seguida, a retoma com o resultado da promessa. 
Isso não custa nenhum recurso da CPU, porque o mecanismo JavaScript pode fazer 
outras tarefas nesse ínterim: executar outros scripts, manipular eventos, etc. */