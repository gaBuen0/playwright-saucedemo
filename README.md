# Automação de Testes — Saucedemo

Projeto de automação de testes end-to-end com Playwright e JavaScript.

# Testes cobertos

Login com sucesso
Login com credenciais inválidas
Listagem de 6 produtos após login
Adicionar produto ao carrinho
Checkout completo (e2e)

# Estrutura

data/     → Dados de teste centralizados
pages/    → Page Objects (LoginPage, InventoryPage, CartPage)
tests/    → Casos de teste organizados por describe

# Como rodar

npm install
npx playwright install
npx playwright test
npx playwright show-report