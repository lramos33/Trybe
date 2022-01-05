## Agora a prática
**⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.**

Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

1. Navegue até a raiz do projeto com o arquivo .txt;

2. Verifique se não existe nada sem _"commitar"_ utilizando `git status` :
    - Caso exista algo, verifique se é necessário e faça o `commit` , ou remova-o.

3. Crie uma nova `branch` com o nome `trybe-skills-changes` e faça checkout nela;

4. No arquivo `.txt`, ao final da lista de habilidades, adicione mais duas habilidades que serão desenvolvidas na Trybe:
  - _Exemplo:_

```txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS
```

- Faça um `git add nome-do-arquivo.extensao` ;
- Você pode adicionar todos os arquivos que você modificou usando `git add .` , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
- Agora um git `commit -m "Mensagem que você gostaria"` ;
- Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, `git commit -m "Adiciona nova skill"` ;
- Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
- E por último um `git push -u origin trybe-skills-changes` ;

5. Abra um Pull Request com uma descrição detalhada:
    - Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: _"Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."_ ;
    - O merge deve ser feito apenas quando chegar no exercício 10.

6. Retorne para a branch principal, `master` , com o comando: `git checkout master` ;

7. Verifique que você está na branch `master` , com o comando: `git branch` (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

8. Crie uma nova `branch trybe-skills-updates` a partir da `master` e faça checkout nela;

9. No mesmo arquivo `.txt` que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
    - Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
    - Faça um `git add nome-do-arquivo.extensao` ;
    - Agora um `git commit -m "Mensagem que você gostaria"` ;
    - Por último um `git push -u origin trybe-skills-updates` ;
    - Após o primeiro _"push"_ da sua branch, você pode usar apenas o comando `git push` ;
    - Abra um _Pull Request_ com uma descrição amigável:

10. Agora, faça o `merge` das branches `trybe-skills-changes` e `trybe-skills-updates` na `branch master` , através do _Pull Request_ :
    - Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
    - Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
    - Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;
    - Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎

## Recapitulando
Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final! 😉

- O **Git** é um sistema de versionamento distribuído (DVCS);

- A maior vantagem do **Git** é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer _"lock"_ de arquivos assim como em outros _VCS's_ ;

- Vimos que a instalação do **Git** e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando `git config` ;

- Para iniciar um repositório local, vimos que você tem duas opções:
    - `git init` (_para criar um novo repositório **Git**_ ) ;
    - `git clone` (_para copiar um repositório **Git** existente para sua máquina e, assim, poder criar branches e Pull Requests_) .

- O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;

- Vimos também que, para subir seu código para o **GitHub** , basta você verificar qual das opções abaixo deseja:
    - Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando `git init` ;
    - Trabalhar num repositório já existente, onde utilizará o comando `git clone` ;
**Esses dois comandos são excludentes , ou seja, você usa um, ou usa o outro, nunca os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo:**

- **Fluxo 1** - Após `git init` :
    1. Criar seu primeiro `commit` ;
    2. Criar o repositório remoto na sua conta do **GitHub** ;
    3. Adicionar a _URL_ do repositório remoto;
    4. Executar o famoso `push` .

- **Fluxo 2** - Após `git clone` :
    1. Criar sua branch dentro do repositório clonado;
    2. Fazer checkout na sua branch;
    3. Criar seu primeiro `commit` ;
    4. Executar o famoso `push` .