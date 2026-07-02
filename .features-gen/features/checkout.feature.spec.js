// Generated from: features\checkout.feature
import { test } from "../../fixtures.js";

test.describe('Checkout', () => {

  test('Finalizar compra com sucesso', async ({ Given, When, Then, And, cartPage, inventoryPage, loginPage }) => { 
    await Given('que estou logado no sistema', null, { loginPage }); 
    await And('adicionei um produto ao carrinho', null, { cartPage, inventoryPage }); 
    await When('finalizo a compra com nome "Gabriel" sobrenome "Silva" e CEP "11111"', null, { cartPage }); 
    await Then('devo ver a mensagem de pedido confirmado', null, { cartPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado no sistema","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And adicionei um produto ao carrinho","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When finalizo a compra com nome \"Gabriel\" sobrenome \"Silva\" e CEP \"11111\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Gabriel\"","children":[{"start":28,"value":"Gabriel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Silva\"","children":[{"start":48,"value":"Silva","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"11111\"","children":[{"start":62,"value":"11111","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then devo ver a mensagem de pedido confirmado","stepMatchArguments":[]}]},
]; // bdd-data-end