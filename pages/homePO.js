const { I } = inject();

module.exports = {

  
  titulos:{
    codigoTitulo: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]',
    alunoTitulo: 'hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]',
  },

  
  campoParaPreencher:{
    codigo: '~codigo',
    aluno: '~aluno',
    procurar: '~search'
  },
  buttons:{
    salvar: '~salvar',
    cancelar: '~cancelar',
    sair: '~logout',
  },
  resultado:{
    resultadoTeste: '//android.view.ViewGroup[@content-desc="'+String+'"]/android.widget.TextView'
  },
    
  registrarAluno(codigo, aluno){
    I.fillField(this.campoParaPreencher.codigo, codigo)
    I.fillField(this.campoParaPreencher.aluno, aluno)
    I.tap(this.buttons.salvar)
  },
  
  checkAluno(procurar, check){
    I.fillField(this.campoParaPreencher.procurar, procurar)
    I.seeElement('//android.view.ViewGroup[@content-desc="'+check+'"]/android.widget.TextView')
      
  },


}
