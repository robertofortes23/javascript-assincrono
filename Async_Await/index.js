/* A palavra “async” antes de uma função significa uma coisa simples: uma função 
sempre retorna uma promessa. Outros valores são incluídos em uma promessa 
resolvida automaticamente. */

async function funcao() {
    return 1;
}

funcao().then(alert); // 1