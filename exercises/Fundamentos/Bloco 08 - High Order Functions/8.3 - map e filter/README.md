## Instruções para realização dos exercícios
Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js , e assim por diante. Em cada exercício existe uma ou mais chamadas de funções do módulo assert . Estas funções checarão automaticamente se seu código retorna o resultado esperado.

Sua solução só será considerada correta se todos os asserts do arquivo forem executados sem erros. No Visual Studio Code , você pode executar o código do exemplo clicando com o botão direito e escolhendo a opção Run Code.

Quando todos os asserts passam, isto é, nenhum deles encontra um resultado diferente esperado, nada de diferente do normal é reportado.

### Agora a prática

1. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
2. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
3. Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
4. Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
5. Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
6. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.