# 🧪 Automação de Testes — SauceDemo

Testes end-to-end do [SauceDemo](https://www.saucedemo.com) (e-commerce de demonstração) com **Playwright**, **JavaScript** e **BDD (Gherkin)** via `playwright-bdd`, organizados em **Page Object Model**.

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Cucumber/Gherkin](https://img.shields.io/badge/Cucumber%2FGherkin-23D96C?style=flat-square&logo=cucumber&logoColor=white)

## O que este projeto faz

Automatiza os fluxos principais de uma loja virtual — do login ao checkout — com os cenários escritos em Gherkin (português) e conectados a Page Objects pelo `playwright-bdd`.

## Cenários cobertos

- Login com sucesso (`standard_user`)
- Login com credenciais inválidas (mensagem de erro)
- Listagem dos produtos após o login
- Adicionar produto ao carrinho
- Checkout completo (end-to-end)

## Stack

- [Playwright](https://playwright.dev) — execução dos testes no navegador
- JavaScript (Node.js)
- [playwright-bdd](https://github.com/vitalets/playwright-bdd) — BDD com Gherkin sobre o Playwright
- Page Object Model

## Estrutura

```
data/        Dados de teste centralizados (usuários)
features/    Cenários em Gherkin (.feature)
pages/       Page Objects (LoginPage, InventoryPage, CartPage)
steps/       Step definitions do BDD
tests/       Testes Playwright sem BDD
fixtures.js  Conexão entre os steps BDD e os Page Objects
```

## Como rodar

Pré-requisitos: Node.js 18+.

```bash
npm install                 # instala as dependências
npx playwright install      # baixa os navegadores
npx bddgen                  # gera os specs a partir dos .feature
npx playwright test         # executa os testes
npx playwright show-report  # abre o relatório HTML
```

---

Projeto de estudo de automação de testes. O SauceDemo é um site público mantido pela Sauce Labs para prática.
