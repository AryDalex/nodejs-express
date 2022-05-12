### Exercícios
---

> PARTE 1 (Responder esses exercicios (1 ao 9) em um README no repositório da aplicação node / express de vocês.)

1. Pesquisar sobre o que é JWT (Json Web Token) e Cookies para transporte de dados, descrever.

2. Atualizar o sistema de autenticação básico da ultima aula para utilizar JWT. (Procurar tutoriais como por exemplo: https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/) e implementar a sua solução.

3. Finalizado a implementação do JWT, enviar para mim o link do repositório (que vocês vem trabalhando no exercicio das 14 branches) no privado no discord com o novo sistema de autenticação.

> PARTE 2 (Na próxima aula começaremos estudar programação orientada a objetos e posteriormente Java)

4. Pesquisar sobre POO (Programação Orientada a Objetos). O que é POO ?

5. Quais as diferenças entre programação estruturada e programação orientada a objetos ?

6. Quais linguagens estruturadas e quais linguagens orientadas a objetos ?

7. O que são classes e o que são objetos ?

8. Quais o quatro pilares da POO ? Descreva cada um deles com suas palavras.

### Respostas
---

> 1

### JWT (Json Web Token)

JWT é um padrão da indústria definido pela RFC7519, para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web.
    
```
eyJhbGci0iJIUZI1NiIsInR5CCI6IkpXVCJ9.
eyJzdWIiOiIxMjMONTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4 iOnRydWv9.
TJVA950rM7E2cBab3ORMHrHDcEfxjoYZgeFONFh7HgQ
```
    
Também é considerado uma forma compacta e segura das reivindicações (Claims) entre as partes. Condificando essas Claims como objetos JSON, que podem ser assinados e criptografados digitalmente.
Para que essas assinaturas e criptografias aconteçam, usamos o JWS (Json Wed Signature) e o JWE (Json Wed Encryption).
    
- **JWS:** usando um algoritimo HMAC ou com um par de chaves público privada, usando RSA ou ECDSA (verificam a integrigadade dos tokens contidas neles).

- **JWE:** garante também o segredo criptografado entre as partes.

JWT se destaca em três momentos, na autenticação, na autorização e na troca de informações:
    
#### Header (cabeçalho)
Define o tipo de criptocrafia e o tipo de token usado em sua assinatura, como por exemplo, o HMAC, o SHA256 ou o RSA.
    
```
{
    "alg": "HS256",
    "typ": "JWT"
}
```
    
#### Payload (carga útil)
Aonde ficam as Claims, algumas Claims são especificas do JWT e outras podem ser definidas pelos usuários. Existe três tipos de Claims:
 
- **Registered:** as Registered criadas pelos usuários, serão automaticamente definidas como Public ou Private.

- **Public Claims:** deve ser definida no IANA JSON Web Token Registry ou através de uma URI que contenha um namespace.

- **Private Claims:** seram definidas apenas nas partes que vão usar.
    
```
{
    "iss": "https://codigofonte.com.br",
    "sub": "1234567890",
    "name": "Codiogo Fonte",
    "admin": true
}
```
    
#### Signature (assinatura)
Tem seu corpo com base do Header e no Payload.
    
    ```
    HMACSHA256(
        base64UrlEncode(header) + "." +
        base64UrlEncode(payload),
        secret)
    ```
    
### Cookies

Os cookies contêm informações que nos ajudam a identificar o visitante, como personalizar a página de acordo com o perfil, gerar métricas de visitas ou de comportamento ou para facilitar o transporte de dados entre as páginas do site. Ou seja, é para identificar os usuários que acessão as páginas e mostrar informações de acordo com os seus interesses.

> 4

### POO (Programação Orientada a Objetos)

POO é um paradigma, é uma forma de estruturar seu código sua aplicações, que segue algumas regras. Ele dificulta o programa a fazer coisas errada e executar coisas erradas.

Qualquer conjunto de dados é um objeto. Se quiser fazer alterações nos dados ou criar novas estruturas apartir deles, você faz apartir de mensagens, metodos que esse objeto vai fazer.

Tem facilidade de esconder coisas que você não quer que vaze, isso é feito protegendo seus dados de influencias externas, assim, madando mensagem para esse proprio objeto, como metodos ou eventos. Também faz com que a estrutura de dados fique contida em uma estrutura só, no caso nos objetos.

> 5

### Programação estruturada & Programação orientada a objetos

A programação orientada a objetos é voltada ao conseito de classes e herança, entretando, a programação estruturada é voltada procedimentos e funções definidas por usuários. 

> 6

|Linguagens estruturadas|Linguagens orientadas a objetos|
|-----------------------|-------------------------------|
|PL/1                   |Java                           |
|Fortran                |Python                         |
|Algol 68               |C#                             |
|Cobol|C++              |C++                            |
|Linguagem C            |                               |
|Pascal                 |                               |
|Simula                 |                               |

> 7

### Classes & Objetos

Classe é a definição do tipo, é um conjunto de características. Representa objetos do mesmo tipo (pussuem os mesmos comportamentos), são da mesma classe.

![image](https://user-images.githubusercontent.com/97049417/167919627-6e9359ac-5b9e-403f-bd21-9f713feada5c.png)

Qualquer conjunto de dados dentro do código é um objeto, os objetos são as características.

![image](https://user-images.githubusercontent.com/97049417/167919724-1a5d2248-10c2-4618-9f8c-363c04caa3e7.png)

> 8

#### 

### Observações Sobre os Projetos
---

OBS: Os repositórios de projetos desenvolvidos para PADO, DEVEM ser criados como privado na organização PADOLabs (NÃO CRIAR EM REPOSITÓRIO PESSOAL, VISTO QUE É SOFTWARE PROPRIETÁRIO).

@everyone
