# E-commerce SOLID — Projeto 2

Neste repositório está a versão finalizada do projeto 2 de Arquitetura de Software.

Ao fim da seção "Como rodar" está o método utilizado para escolher o "modo de execução" do programa, de acordo ao exigido (variável .env).

## Como rodar

```bash
npm install
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

A API sobe em `http://localhost:3000`. Teste com:

```bash
curl -X POST http://localhost:3000/orders \
-H "Content-Type: application/json" \
-d '{
  "customer": "cliente@ethereal.email",
  "items": [{ "productId": 1, "quantity": 1 }],
  "paymentMethod": "credit_card",
  "paymentDetails": { "cardNumber": "1234567812345678", "cvv": "123" }
}'
```

Produto `1` é o livro físico (R$ 100 + R$ 10 de frete), produto `2` é o e-book (R$ 50, sem frete). Formas de pagamento: `credit_card`, `debit_card` e `pix`.

### Escolhendo modo de execução

O programa tem dois modos de execução: 'dev' e 'test'.

Por padrão, o programa roda no modo 'dev', mesmo que esteja _sem_ o arquivo .env.

Para mudar o modo, é necessário criar o arquivo .env (ou alterá-lo, caso já exista) de acordo aos valores especificados em .env.examples

Caso o valor inserido seja diferente do especificado nos exemplos, o programa dará erro de APP_ENV inválida.

---

## Critérios de aceite

1. Clonar, instalar, migrar, popular e rodar funcionam sem erro.
2. Os produtos `1` e `2` dão o total certo nos dois modos.
3. Trocar de modo exige mudar só o `APP_ENV`.
4. A escolha do modo acontece só no `container.ts`: nenhum arquivo de `services/` ou `controllers/` lê o `APP_ENV` nem importa Prisma, Nodemailer ou uma implementação de repositório, provider ou pagamento.
5. Uma seção **"Como rodar"** no seu README explica os dois modos.

### Entrega

Pelo git. Informe na caixa de texto do AVA o link do repositório. Ele não pode estar privado: teste antes de entregar.
