// Generated from: features\inventory.feature
import { test } from "../../fixtures.js";

test.describe('Produtos', () => {

  test('Listar produtos após login', async ({ Given, Then, inventoryPage, loginPage }) => { 
    await Given('que estou logado no sistema', null, { loginPage }); 
    await Then('devo ver 6 produtos na página', null, { inventoryPage }); 
  });

  test('Adicionar produto ao carrinho', async ({ Given, When, Then, inventoryPage, loginPage }) => { 
    await Given('que estou logado no sistema', null, { loginPage }); 
    await When('adiciono o primeiro produto ao carrinho', null, { inventoryPage }); 
    await Then('o carrinho deve mostrar 1 item', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado no sistema","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then devo ver 6 produtos na página","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que estou logado no sistema","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When adiciono o primeiro produto ao carrinho","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then o carrinho deve mostrar 1 item","stepMatchArguments":[]}]},
]; // bdd-data-end