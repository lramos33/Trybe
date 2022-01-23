## Agora a prática

Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (Uma vaca falante no terminal 🐮) !

A ideia é deixarmos a mensagem para o cowsay parametrizável, dessa forma, conseguiremos executar o comando:

```Bash
docker container run cowsay Muuuuuuhhh
```

E ter a seguinte saída no terminal:

```Bash
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

Para isso:

1. Crie um Dockerfile utilizando a imagem `chuanwen/cowsay`.

2. Agora defina um `ENTRYPOINT` para a execução do comando.

3. Utilize o `CMD` para definir uma mensagem padrão.

4. Gere uma `build` e execute um container baseado em sua imagem sem passar nenhum comando.

5. Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQM TRYBE"` , para exibir um dragão junto com a vaquinha.
