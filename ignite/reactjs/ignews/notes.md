## Dev notes

Anotação para o desenvolvimento

### Projeto

Comandos para utilização do projeto:

`yarn` - Instalar as dependências necessarias no projeto
`yarn dev` - Executar o projeto no ambiente de desenvolvimento

### Stripe

Gateway de pagamento utilizado no desenvolvimento do **ignews**.

Comandos para utilização do stripe:

`stripe login` - Logar no amabiente do stripe.
`stripe listen --forward-to localhost:3000/api/webhooks` - Escutar as requisições e simular os callbacks do stripe.
