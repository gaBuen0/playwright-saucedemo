// Generated from: features\login.feature
import { test } from "../../fixtures.js";

test.describe('Login', () => {

  test('Login com sucesso', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('que estou na página de login', null, { loginPage }); 
    await When('faço login com "standard_user" e "secret_sauce"', null, { loginPage }); 
    await Then('devo ser redirecionado para a página de produtos', null, { page }); 
  });

  test('Login com credenciais inválidas', async ({ Given, When, Then, loginPage }) => { 
    await Given('que estou na página de login', null, { loginPage }); 
    await When('faço login com "standard_user" e "senha_errada"', null, { loginPage }); 
    await Then('devo ver uma mensagem de erro', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When faço login com \"standard_user\" e \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"secret_sauce\"","children":[{"start":34,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then devo ser redirecionado para a página de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que estou na página de login","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When faço login com \"standard_user\" e \"senha_errada\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"senha_errada\"","children":[{"start":34,"value":"senha_errada","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then devo ver uma mensagem de erro","stepMatchArguments":[]}]},
]; // bdd-data-end