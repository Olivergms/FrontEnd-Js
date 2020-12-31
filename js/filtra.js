var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
   // console.log(this.value);
    //busca um array de elementos
    var pacientes = document.querySelectorAll(".paciente");

   
   if(this.value.length>0){

   
   
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];

            var tdnome = paciente.querySelector(".info-nome");
            var nome =tdnome.textContent;
            //irá buscar pelo valor, e será case insensitivi
            var expressao = new RegExp(this.value, "i");

            //se ele não tiver o conteudo digitado, irá sumir da tela
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");

        }
        
    }
});