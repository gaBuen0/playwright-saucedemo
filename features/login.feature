Feature: Login

  Scenario: Login com sucesso
    Given que estou na página de login
    When faço login com "standard_user" e "secret_sauce"
    Then devo ser redirecionado para a página de produtos

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When faço login com "standard_user" e "senha_errada"
    Then devo ver uma mensagem de erro