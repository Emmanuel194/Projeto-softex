const button = document.querySelector(".button1");
const input = document.querySelector("form .nome");
const inputSobrenome = document.querySelector("form .sobrenome")
var minhaDiv = document.querySelector(".lista")
var alunos = [];


function nomeSobrenome (input, inputSobrenome){
  return {
    input,inputSobrenome
  }
}


button.addEventListener("click",function (e) {
    e.preventDefault()
    if(typeof input.value === "string") {
      alunos.push(nomeSobrenome(input.value,inputSobrenome.value))
      
      console.log(alunos)
    }
    for (var i = 0; i < alunos.length; i++) {
      var listaAlunos = alunos[i];
      let p = document.createElement("p")
      let botao = document.createElement("button")
      botao.textContent = "apagar"
      botao.setAttribute ("class","deletar")
      p.textContent = `${listaAlunos.input}${listaAlunos.inputSobrenome} `;
      p.appendChild (botao)
      minhaDiv.appendChild(p)
      
      console.log(listaAlunos)

    }
     
}) 

document.addEventListener("click", function (event){
  const clickUser = event.target;
  if (clickUser.classList.contains("deletar")){
    clickUser.parentElement.remove();
    console.log(clickUser);
  }
  
})



 







