## Agora, a prática
#### Parte 1
1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!

- Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :
- Utilize o HTML e o js passado como base.
- Agora vamos tentar fazer as requisições a API usando `fetch`. Essa função recebe dois parâmetros:
    - O endereço para o qual a requisição será feita, ou seja, a url do serviço.
    - Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers
- Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

#### Parte 2
1. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
    - Primeiramente, instancie uma Promise
    - Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
    - Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then` , com um `console.log('Promise resolvida')` e um `catch`, com um `console.log('Promise rejeitada')` à Promise , só para que o código funcione e possamos ver o resultado.
    - Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
2. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
3. Quando a Promise for rejeitada, imprima, via `console.log` , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
4. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.