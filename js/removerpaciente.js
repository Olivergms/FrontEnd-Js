var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    //adiciona a classe que apaga o conteudo da tabela
   event.target.parentNode.classList.add("fadeOut");


   //o js espera 500mili segundo e remove o conteudo
   setTimeout(function(){
        //remove a linha da tabela
    event.target.parentNode.remove();
   },500)
   
});




//pacientes.forEach(function(paciente) {
    //adiciona um evento de double click e executa função anonima
 //   paciente.addEventListener("dblclick", function() {
        //remove campo onde foi clicado
   //     this.remove();
   // });
//});