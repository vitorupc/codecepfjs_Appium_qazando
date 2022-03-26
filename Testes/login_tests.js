Feature('login');


Scenario('logar com sucesso', ({I, loginPage}) => {

   // I.waitForElement('~email',5)
   // I.fillField('~email', 'teste@teste.com')
   // I.fillField('~senha', '123456')
   // I.tap('~entrar')
   // I.waitForElement("~codigo",5)
   loginPage.doLogin('teste@teste.com', '123456')
    

});

Scenario('logar com erro', ({I, loginPage }) => {

    // I.waitForElement('~email',5)
    // I.fillField('~email', 'teste@teste.com')
    // I.fillField('~senha', '123456')
    // I.tap('~entrar')
    // I.waitForElement("~codigo",5)
    loginPage.doLoginError('testss@teste.com','123456')   
 
 });