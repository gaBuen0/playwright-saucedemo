# Automação de Testes — Saucedemo

Projeto de automação de testes end-to-end com Playwright, JavaScript e BDD (Gherkin).

# Tecnologias

- Playwright
- JavaScript
- BDD com Gherkin (playwright-bdd)
- Page Object Model

# Testes cobertos

- Login com sucesso
- Login com credenciais inválidas
- Listagem de 6 produtos após login
- Adicionar produto ao carrinho
- Checkout completo (e2e)

# Estrutura

data/        → Dados de teste centralizados
features/    → Cenários em Gherkin (.feature)
pages/       → Page Objects (LoginPage, InventoryPage, CartPage)
steps/       → Step definitions do BDD
tests/       → Testes Playwright sem BDD
fixtures.js  → Conexão entre BDD e Page Objects

# Como rodar

- npm install
- npx playwright install
- npx bddgen
- npx playwright test
- npx playwright show-report
