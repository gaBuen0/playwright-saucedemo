Feature: Checkout

  Scenario: Finalizar compra com sucesso
    Given que estou logado no sistema
    And adicionei um produto ao carrinho
    When finalizo a compra com nome "Gabriel" sobrenome "Silva" e CEP "11111"
    Then devo ver a mensagem de pedido confirmado