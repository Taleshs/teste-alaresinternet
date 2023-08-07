# Alaresinternet

[Crud Simples de administração de Planos e Pedidos.]

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Next.js

## Configuração

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Crie um arquivo `.env` na raiz do projeto e preencha as variáveis de ambiente necessárias:

3. Instale as dependências: `npm install`

## Executando o Servidor

Para rodar o servidor localmente, execute o seguinte comando: `npm run dev:both`

O servidor será iniciado na porta especificada no arquivo `.env`.

## Rotas

### Pedidos

- `GET /api/pedidos`: Retorna todos os pedidos.
- `GET /api/pedidos/:id`: Retorna um pedido específico com base no ID.
- `POST /api/pedidos`: Cria um novo pedido.
- `PUT /api/pedidos/:id`: Atualiza um pedido existente com base no ID.
- `DELETE /api/pedidos/:id`: Exclui um pedido com base no ID.

### Planos

- `GET /api/planos`: Retorna todos os planos.
- `GET /api/planos/:id`: Retorna um plano específico com base no ID.
- `POST /api/planos`: Cria um novo plano.
- `PUT /api/planos/:id`: Atualiza um plano existente com base no ID.
- `DELETE /api/planos/:id`: Exclui um plano com base no ID.
