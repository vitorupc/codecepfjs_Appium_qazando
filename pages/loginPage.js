const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    password: '~senha',
    codigo: '~codigo'
  },
  buttons:{
    entrar: '~entrar'
  },

  mensagens:{
     mensagemLoginError: '~lognFail'
  },
doLogin(email,senha){
  I.waitForElement(this.fields.email,10)
  I.fillField(this.fields.email, email)
  I.fillField(this.fields.password, senha)
  I.tap(this.buttons.entrar)
  I.waitForElement(this.fields.codigo,10)
  I.seeElement('~codigo')
},

doLoginError(email,senha){
  I.waitForElement(this.fields.email,10)
  I.fillField(this.fields.email, email)
  I.fillField(this.fields.password, senha)
  I.tap(this.buttons.entrar)
  I.waitForElement(this.mensagens.mensagemLoginError,5)
}
  


}
