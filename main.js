//Função Enter

const form = document.querySelector('form')
const submit =  document.querySelector('button[type="text"]')

form.addEventListener('keydown', function(e)  {
if (e.key === 'Enter' && e.shiftKey) {
    e.preventDefault()
    submit.click()
}
})
function Coletar(){
 let CEP = document.querySelector('.input-cep').value
 console.log(CEP)
 Dados(CEP)
}
async function Dados(CEP){
    let dados = await 
    fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

function ExibirDados(dados) {
  document.getElementById("cidade").value = dados.localidade
  document.getElementById("bairro").value = dados.bairro
  document.getElementById("endereço").value = dados.logradouro

}