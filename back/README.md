<h1 align="center">
  <p>BACK-END 📱</p>
</h1>

<h3 align="center">
  Api Node + TS | Express.js | MongoDB
</h3>

<p align="center">
  <a href="#sobre-wave">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar-rocket">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades-star">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-man_technologist">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#padrão-de-commits-barber">Padrão de commits</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://challenge-allu-back.vercel.app/" target="_blank">Aplicação na Vercel</a>
</p>

<p align="center">
  <img alt="design do projeto" width="650px" src="./.github/challenge-allu-back.png" />
<p>


## Sobre :wave:

Essa API oferece recursos para o cadastro de usuários e o gerenciamento completo de produtos cadastrados.
É possível realizar um `CRUD` completo, sendo capaz de criar, visualizar, editar e remover cada produto.


## Como Usar :rocket:

**Para acessar a documentação da API, utilize a rota `/docs` para mais detalhes**

[https://challenge-allu-back.vercel.app/](https://challenge-allu-back.vercel.app/)

Para ter acesso a informações mais detalhadas da Slido API, acesse a documentação através do link abaixo:

[Documentação Slido API](https://challenge-allu-back.vercel.app/docs/)


## Funcionalidades :star:

Vamos trabalhar em cima de duas collections do mongoDB:

 - `Users`
 - `Products`

Em relação ao schema do `Users`, é possível acessar as seguintes rotas:

 - `POST /user`
 > Cria um novo usuário com os dados fornecidos no corpo da requisição, verifica se o email do usuário já existe no banco de dados, realiza a criptografia da senha do usuário e valida os campos do body.

 - `POST /login`
 > Autentica o usuário com email e senha, retorna um token JWT de acesso e valida os campos do body.

 - `GET /users/{id}`
 > Retorna um usuário com o ID especificado, valida se o id é passado como parâmetro na rota e se o token JWT de acesso é válido.

 - `GET /users`
 > Retorna uma lista com todos os usuários cadastrados e valida se o token JWT de acesso é válido.

 - `PATCH /users/{id}`
 > Retorna um usuário atualizado com o ID especificado, valida se o id é passado como parâmetro na rota e se o token JWT de acesso é válido e valida os campos do body.

 - `DELETE /users/{id}`
 > Deleta o usuário identificado pelo ID fornecido na rota, valida se o id é passado como parâmetro na rota e se o token JWT de acesso é válido.


```BASH
// Exemplo de acesso para a rota get /users

https://challenge-allu-back.vercel.app/users
```

Em relação ao schema dos `Products`, é possível acessar as seguintes rotas:

 - `POST /product`
 > Cria um novo produto com os dados fornecidos no corpo da requisição, valida se o token JWT de acesso é válido e valida os campos do body.

 - `POST /products`
 > Restaura os dados de todos os produtos originais armazenados no banco de dados.

 - `GET /products`
 > Retorna uma lista com todos os produtos cadastrados e valida se o token JWT de acesso é válido.

 - `PATCH /product/{id}`
 > Retorna as informações atualizadas do produto, valida se o id é passado como parâmetro na rota, se o token JWT de acesso é válido e valida os campos do body.

 - `DELETE /product/{id}`
 > Deleta um produto identificado pelo ID fornecido na rota, valida se o id é passado como parâmetro na rota e se o token JWT de acesso é válido.

```BASH
// Exemplo de acesso para a rota get /products

https://challenge-allu-back.vercel.app/products
```


## Tecnologias :man_technologist:

Segue abaixo a lista de tecnologias utilizada no projeto:

 - `Node`
 > Plataforma de desenvolvimento para criação de aplicações server-side em JavaScript;
 - `Express`
 > Framework web minimalista para Node.js;
 - `TypeScript`
 > Linguagem que adiciona tipagem estática ao JavaScript, tornando-o mais seguro e produtivo para o desenvolvimento de software.
 - `tsx`
 > Ferramenta que monitora as alterações no código e reinicia o servidor automaticamente;
 - `MongoDB`
 > Banco de dados NoSQL orientado a documentos;
 - `EsLint`
 > Ferramenta para análise estática de código JavaScript;
 - `http-status-codes`
 > Biblioteca que fornece uma lista de códigos de status HTTP comuns em JavaScript.
 - `Bcrypt`
 > Biblioteca para criptografia de senhas;
 - `Json Web Token (JWT)`
 > Padrão de token de acesso utilizado para autenticação e autorização em aplicações web;
 - `Swagger`
 > Ferramenta para documentação de APIs;
 - `Vercel`
 > Plataforma de hospedagem voltada para aplicações web modernas e escaláveis.


## Padrão de commits :barber:

<table>
  <thead>
    <tr>
      <th>Comando git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":tada: Commit inicial"</code>
      </td>
      <td>🎉 Commit inicial</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualizaçao do README"</code>
      </td>
      <td>📚 docs: Atualizaçao do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>🐛 fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Pagina de login"</code>
      </td>
      <td>✨ feat: Pagina de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bricks: ci: Modificaçao no Dockerfile"</code>
      </td>
      <td>🧱 ci: Modificaçao no Dockerfile</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":recycle: refactor: Passando para arrow functions"</code>
      </td>
      <td>♻️ refactor: Passando para arrow functions</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":zap: perf: Melhoria no tempo de resposta"</code>
      </td>
      <td>⚡ perf: Melhoria no tempo de resposta</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":boom: fix: Revertendo mudanças ineficientes"</code>
      </td>
      <td>💥 fix: Revertendo mudanças ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estilizaçao CSS do formulario"</code>
      </td>
      <td>💄 feat: Estilizaçao CSS do formulario</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":test_tube: test: Criando novo teste"</code>
      </td>
      <td>🧪 test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bulb: docs: Comentários novos"</code>
      </td>
      <td>💡 docs: Comentários novos</td>
    </tr>
  </tbody>
</table>

---
