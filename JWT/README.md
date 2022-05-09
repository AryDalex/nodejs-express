### Exercícios
---

> PARTE 1 (Responder esses exercicios (1 ao 9) em um README no repositório da aplicação node / express de vocês.)

1. Pesquisar sobre o que é JWT (Json Web Token) e Cookies para transporte de dados, descrever.

    > JWT

    JWT (Json Web Token) é um padrão da indústria definido pela RFC7519, para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web.
    
    ![image](https://user-images.githubusercontent.com/97049417/167468333-5b6da04e-c778-4ead-b0d1-61cd6ae03b5a.png)
    
    Também é considerado uma forma compacta e segura das reivindicações (Claims) entre as partes. Condificando essas Claims como objetos JSON, que podem ser assinados e criptografados digitalmente. 
    Para que essas assinaturas e criptografias aconteçam, usamos o JWS (Json Wed Signature) e o JWE (Json Wed Encryption).
    
    - JWS: usando um algoritimo HMAC ou com um par de chaves público privada, usando RSA ou ECDSA (verificam a integrigadade dos tokens contidas neles).
    - JWE: garante também o segredo criptografado entre as partes.

    JWT se destaca em três momentos, na autenticação, na autorização e na troca de informações:
    
    - Header (cabeçalho): define o tipo de criptocrafia e o tipo de token usado em sua assinatura, como por exemplo, o HMAC, o SHA256 ou o RSA.
    
    ![image](https://user-images.githubusercontent.com/97049417/167469733-5f59f585-0ee0-41b1-8a72-6115896c0f0c.png)
    
    - Payload (carga útil): aonde ficam as Claims, algumas Claims são especificas do JWT e outras podem ser definidas pelos usuários. Existe três tipos de Claims:
 
        - Registered: as Registered criadas pelos usuários, serão automaticamente definidas como Public ou Private
        - Public Claims: deve ser definida no IANA JSON Web Token Registry ou através de uma URI que contenha um namespace
        - Private Claims: seram definidas apenas nas partes que vão usar.

    ![image](https://user-images.githubusercontent.com/97049417/167473186-01c4a847-fb7d-44db-9b77-d7168369df59.png)
    
    - Signature (assinatura): Tem seu corpo com base do Header e no Payload.

    ![image](https://user-images.githubusercontent.com/97049417/167473772-8c3d3a52-72e3-4d48-9f23-4fa925b65068.png)
    
    > Cookies

    Os cookies contêm informações que nos ajudam a identificar o visitante, como personalizar a página de acordo com o perfil, gerar métricas de visitas ou de comportamento ou para facilitar o transporte de dados entre as páginas do site. Ou seja, é para identificar os usuários que acessão as páginas e mostrar informações de acordo com os seus interesses.

2. Atualizar o sistema de autenticação básico da ultima aula para utilizar JWT. (Procurar tutoriais como por exemplo: https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/) e implementar a sua solução.

3. Finalizado a implementação do JWT, enviar para mim o link do repositório (que vocês vem trabalhando no exercicio das 14 branches) no privado no discord com o novo sistema de autenticação.


> PARTE 2 (Na próxima aula começaremos estudar programação orientada a objetos e posteriormente Java)

4. Pesquisar sobre POO (Programação Orientada a Objetos). O que é POO ?

6. Quais as diferenças entre programação estruturada e programação orientada a objetos ?

7. Quais linguagens estruturadas e quais linguagens orientadas a objetos ?

8. O que são classes e o que são objetos ?

9. Quais o quatro pilares da POO ? Descreva cada um deles com suas palavras.


### Observações Sobre os Projetos
---

OBS: Os repositórios de projetos desenvolvidos para PADO, DEVEM ser criados como privado na organização PADOLabs (NÃO CRIAR EM REPOSITÓRIO PESSOAL, VISTO QUE É SOFTWARE PROPRIETÁRIO).

@everyone
