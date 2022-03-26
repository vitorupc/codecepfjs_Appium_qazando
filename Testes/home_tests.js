Feature('home');
const {I,loginPage } = inject();

var code = require('../Util/number.js');
var name = require('../Util/name.js');

Before(() => {
    loginPage.doLogin('teste@teste.com', '123456')
});
Scenario('Salvar um aluno', ({homePO}) => {

    const codigo = code.getNumber()
    const nome = name.getName()
    
    homePO.registrarAluno(codigo,nome)
    homePO.checkAluno(nome, codigo)

});
