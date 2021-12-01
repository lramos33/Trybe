## Exercício de fixação
Vamos criar formulários utilizando `Redux`! \o/

Você implementará o Redux para dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela.

Lembrando que os formulários já estão criados, não é necessário criar novos arquivos além dos propostos para a execução do exercício.

![forms-redux](images/form-redux.gif)

Para isso, é preciso salvar as informações de cada formulário no gerenciador de estados e, por fim, numa outra página, acessar esses dados para que sejam renderizados.

Você vai precisar de:

* Gerenciador de estados (Reeeedux), para salvar as informações na `store` e também para acessá-las.

Então, mãos ao código!!

#### Começando o exercício

**1 - Implemente o Redux:**
- Dentro de uma pasta "redux", crie as pastas "actions", "reducers" e "store".
- Dentro de "actions" crie um arquivo chamado `action.js`.
- Dentro de "reducers" crie um arquivo chamado `reducer.js` e, caso necessário, um arquivo `index.js` para usar o `combineReducers`.
- Dentro de "store" crie um arquivo chamado `store.js`.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

**Dicas:** 
- De início, você pode implementar seu reducer apenas com o valor `default`.
-  O `composeWithDevTools` pode te ajudar.

_Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`._

_Lembre-se de fazer as importações corretas para o bom funcionamento da sua aplicação._

**2 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.**

**Dica:** Lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.

**3 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.**
