# SauceDemo

Este repositório contém testes automatizados para o site SauceDemo, utilizando Cypress e o padrão Page Object Model (POM).

## 🚀 Tecnologias utilizadas

```
Node.js (>= 18.x recomendado)

Cypress

Mocha (runner padrão do Cypress)

Chai (asserts)
```

## ⚙️ Executando os testes

Modo interativo (GUI do Cypress):
```
npx cypress open
```
Modo headless (linha de comando):
```
npx cypress run
```

### 🔩 Analise os testes de API

Automatizar cenários de requisições da aplicação **[SauceDemo]**, garantindo a validação de funcionalidades essenciais, como:

```
- Login
- Produto
- Carrinho
- Checkout

```

## 🧩 Construído com

* Padrão Page Object Model (POM) para separar lógica de teste e localizadores.
* Uso de fixtures para manter dados de teste centralizados.
* Validações de UX e segurança (ex.: senha não visível na página).
* Cenários nomeados de forma descritiva.

## 📌 Observações

* O site SauceDemo é público e estável, feito para fins de estudo e testes.

* Nenhuma credencial real deve ser usada — utilize apenas as disponibilizadas pelo próprio site.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/LucasWandermurem/sauce-demo-cypress-web/blob/main/LICENSE) para detalhes.