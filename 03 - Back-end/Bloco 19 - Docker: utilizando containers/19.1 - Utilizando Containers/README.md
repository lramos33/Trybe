## Agora a prática

1. No Docker Hub, utilizando a caixa de busca, busque pela imagem da Distribuição `Linux Debian`;

2. Uma vez que encontrar a imagem oficial , acesse-a e verifique na página de detalhes se existe algum comando para baixarmos a imagem localmente sem ter que criar um `container` para isso;

3. Baixe a imagem utilizando a tag : `stable-slim` , que é uma versão reduzida da distribuição;

4. Após baixar a imagem para seu computador local, crie e execute um `container` no modo interativo utilizando essa imagem como referência (não esqueça referenciar a `tag` );

5. No terminal, você deve conseguir rodar o comando `cat /etc/*-release` , que vai retornar os dados da distribuição `Debian` que está sendo rodada dentro do `container`;

6. Encerre o terminal;

7. Verifique na sua lista de containers , qual o `container` é referente ao exercício que acabou de praticar;

8. Inicie o mesmo `container` novamente , sem criar outro. Valide se ele está ativo na lista de containers;

9. Retome o `container` que foi criado anteriormente nesse exercício;

10. Rode o comando `cat /etc/debian_version` que deve retornar a versão atual do sistema do container;

11. Encerre o terminal;

12. Remova somente o container criado para esse exercício;

13. (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem `andrius/ascii-patrol`;

14. (Bônus) Encerre o `container` utilizando os botões [ `ctrl` ] + [ `c` ].

### Resolução:

```Bash
# Exercício 03
docker pull debian:stable-slim

# Exercício 04
docker container run -it debian:stable-slim

# Exercício 05
cat /etc/*-release

# Exercício 06
exit

# Exercício 07
docker container ls -a

# Exercício 08
docker start <CONTAINER ID>

# Exercício 09
docker attach <CONTAINER ID>

# Exercício 10
cat /etc/debian_version

# Exercício 11
exit

# Exercício 12
docker container rm <CONTAINER ID>
```

```Bash
# Exercício 13
docker run -it --rm andrius/ascii-patrol
```