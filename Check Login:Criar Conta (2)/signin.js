let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let cpf = document.querySelector('#cpf')
  let userCpf = document.querySelector('#userCpf')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome:'',
    cpf: '',
    email:'',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(cpf.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         cpf: item.cpfCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(cpf.value == userValid.cpf && senha.value == userValid.senha){
    window.location.href = ""
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    cpfLabel.setAttribute('style', 'color: red')
    cpf.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Cpf ou senha incorreto(s)'
    cpf.focus()
  }
  
}