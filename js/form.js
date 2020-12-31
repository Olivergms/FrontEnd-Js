// pega a posição do botão no html
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//adiciona um escutador de eventos no botão
botaoAdicionar.addEventListener("click", function(){
        // segura uma ação padrão de um evento html     
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");
        //função retorna o objeto e atribui a variavel paciente
        var paciente =  obtemPacienteForm(form);       
        var erros = validaPaciente(paciente);
        //validando paciente
        if(erros.length>0 ){
               exibeMensagensDeErro(erros);
               return;
        }

      


        adicionaPacienteNaTabela(paciente);
        //limpa os campos
        form.reset();

        //limpando mensagens de erro
        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
         
});

function obtemPacienteForm(form){
        
        //cria o objeto paciente e extrai os dados do formulario nesse objeto
        var Paciente = {
                nome:form.nome.value,
                peso:  form.peso.value,
                altura: form.altura.value,
                gordura: form.gordura.value,
                imc: calculaImc(form.peso.value,form.altura.value),
                classificacao: classificaImc(imc)
        }
        //retorna o objeto
        return Paciente;
    
}

function montaTr(paciente){
         //criando uma nova linha
       var pacienteTr = document.createElement("tr");
       //adiciona uma classe a nova linha
       pacienteTr.classList.add("paciente");

        //usando o retorno da função montaTd, unindo a nova coluna com a linha pacienteTr
        pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
        pacienteTr.appendChild(montaTd(paciente.classificacao,"info-classificacao"));

       return pacienteTr;
}

function adicionaPacienteNaTabela(paciente){
        //função uma nova linha criada        
        var pacienteTr = montaTr(paciente);
          //pega o ID da tabela no html
         var tabela = document.querySelector("#tabela-pacientes");
          
        // e adiciona a nova linha no html
        tabela.appendChild(pacienteTr);


}


function montaTd(dado,classe){
        //criando uma nova coluna
        var td = document.createElement("td");
        //atribuindo o parametro recebido a coluna
        td.textContent = dado;
        //adicionando uma classe a coluna
        td.classList.add(classe);

        //retorna a coluna
        return td;
}

function validaPaciente(paciente){
       var erros = [];
       if(paciente.nome.length==0){
               erros.push("O nome não pode ser em branco");
       }
        if(!validaPeso(paciente.peso)){
                erros.push("Peso é inválido")
        }

        if(!validaAltura(paciente.altura)){
                erros.push("Altura inválida");
        }
        if(paciente.gordura.length==0){
                erros.push("A gordura não pode ser em branco");
        }
        if(paciente.peso.length==0){
                erros.push("O peso não pode ser em branco");
        }
        if(paciente.altura.length==0){
                erros.push("A altura não pode ser em branco");
        }
      

        return erros;
}//fim função

function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        //limpa conteudo da tag
        ul.innerHTML = "";
        //foreach em js
        //para cada item do array, faça as instruções abaixo
        erros.forEach(function(erro) {
                var li = document.createElement("li");
                li.textContent = erro;
                //colocando dentro da ul
                ul.appendChild(li);
        });
}