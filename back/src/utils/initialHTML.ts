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
  <title>PandaTube 🎥</title>
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
      background-color: #121214;
      color: #FFFFFF;
      height: 100vh;
    }

    .title-container {
      background-color: #00875F;
      border-bottom: 1px solid #00B37E;
      padding: 50px;
      font-size: 2rem;
    }

    .message-container {
      height: calc(100vh - 300px);
      display: flex;
    }

    .message-card {
      background-color: #29292E;
      max-width: max-content;
      margin: auto;
      padding: 80px;
      border: 1px solid #00B37E;
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
      color: #00B37E;
    }
  </style>
</head>

<body>
  <h1 class="title-container">Bem vindo a API do PandaTube 🎥</h1>
  <section class="message-container">
    <section class="message-card">
      <p class="message-card-text">
        Essa <strong>API</strong> oferece recursos para o cadastro de vídeos no panda video e o gerenciamento completo dos usuários cadastrados.
        
        Com ela, é possível realizar um <strong>CRUD</strong> completo, sendo capaz de criar, visualizar, editar e remover cada vídeo cadastrado.
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
