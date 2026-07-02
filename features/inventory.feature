Feature: Produtos

  Scenario: Listar produtos após login
    Given que estou logado no sistema
    Then devo ver 6 produtos na página

  Scenario: Adicionar produto ao carrinho
    Given que estou logado no sistema
    When adiciono o primeiro produto ao carrinho
    Then o carrinho deve mostrar 1 item