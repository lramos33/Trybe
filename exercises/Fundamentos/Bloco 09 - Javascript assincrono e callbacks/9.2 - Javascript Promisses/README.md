## Agora, a prática
#### Parte 1
1. Como primeiro exercício, vamos usar a função `fetch` , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

- Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho.
- Utilize o **_HTML_** e o **_JavaScript_** a seguir como base:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```
```js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

- Agora vamos tentar fazer as requisições a API usando `fetch`. Essa função recebe dois parâmetros:
    - O endereço para o qual a requisição será feita, ou seja, a url do serviço.
    - Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves `method` e `headers`
```js    
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();
```

O segundo parâmetro `myObject` define o tipo de request `method: 'GET'` e o formato da resposta `headers: { 'Accept': 'application/json' }`, como visto nas requisições via `curl`.
- A função `fetch` **é uma Promise** e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas `.then` (em caso de sucesso) e `.catch` (em caso de falha). A requisição `fetch` retorna um objeto _Response_. Utilizando `.then`, verifique a estrutura da resposta usando um `console.log` na `response` retornada pelo `fetch`.
```js    
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();
```
- Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

Para isso, usamos o método `.json()` na resposta da _API_. Esse método converte o conteúdo do `body` da _Response_ e retorna uma outra _Promise_, que, quando bem-sucedida, retorna um _JSON_ contendo as informações da piada.

A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.
```js   
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```
- Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!


#### Parte 2
1. Agora, um passo para trás: vamos fazer, passo a passo, uma _Promise_
    - Primeiramente, instancie uma _Promise_
    - Dentro dela, você deve produzir um _array_ com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
    - Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then` , com um `console.log('Promise resolvida')` e um `catch`, com um `console.log('Promise rejeitada')` à Promise , só para que o código funcione e possamos ver o resultado.
    - Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
2. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
3. Quando a Promise for rejeitada, imprima, via `console.log` , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
4. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.