import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.BASE_URL || 'http://localhost:3001';

const html = `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Challenge Allu 📱</title>
  <style>
    * {
      text-align: center;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    body {
      background-color: #181622;
      color: #FFFFFF;
      height: 100vh;
    }

    .title-container {
      background-color: #1E253E;
      border-bottom: 1px solid #1976D2;
      padding: 50px;
      font-size: 2rem;
    }

    .message-container {
      height: calc(100vh - 300px);
      display: flex;
    }

    .message-card {
      background-color: #1E253E;
      max-width: max-content;
      margin: auto;
      padding: 80px;
      border: 1px solid #1976D2;
      border-radius: 10px;
      width: 700px;
    }

    .message-card-text {
      margin-bottom: 50px;
      text-align: justify;
      word-spacing: 1px;
      line-height: 1.5;
    }

    a {
      color: #1976D2;
    }
  </style>
</head>

<body>
  <h1 class="title-container">Bem vindo a minha API 📱</h1>
  <section class="message-container">
    <section class="message-card">
      <p class="message-card-text">
        Essa <strong>API</strong> oferece recursos para o cadastro de usuários e o gerenciamento completo de produtos cadastrados.
        
        Com ela, é possível realizar um <strong>CRUD</strong> completo, sendo capaz de criar, visualizar, editar e remover cada produto cadastrado.
      </p>
      <h2 class="message-card-link">Acesse a rota
        <strong>
          <a href="${URL}/docs">/docs</a>
        </strong>
        para mais informações!!
      </h2>
    </section>
  </section>
</body>

</html>
`;

export default html;
