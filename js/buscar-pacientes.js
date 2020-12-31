var botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...");
    //objeto xml responsavel por fazer requisições http
    var xhr = new XMLHttpRequest();

    //abrindo conexão
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //adicionando evento ao objeto
    //ao receber uma resposta, ele executa uma função anonima
    xhr.addEventListener("load", function(){
        //exibe o texto da resposta
        //console.log(xhr.responseText);
        

        //pegando o objeto json e armazenando
        var resposta = xhr.responseText;

        //exibe o tipo do objeto
        //console.log(typeof resposta);

        //vai ler o objeto json e devolve um objeto javascript
        var pacientes = JSON.parse(resposta);
        //exibe o tipo do objeto
        //console.log(pacientes);

        // para cada paciente ..
       pacientes.forEach(function (paciente) {        
           adicionaPacienteNaTabela(paciente)
            
       });


       //classificando os novos pacientes, pois o json não possuia o atributo classificação

      var pacientes = document.querySelectorAll(".paciente");
       
      pacientes.forEach(function (paciente) {
          tdclassificacao = paciente.querySelector(".info-classificacao");
          tdimc = paciente.querySelector(".info-imc");

          if(tdclassificacao.textContent==0){
            tdclassificacao.textContent = classificaImc(tdimc.textContent);
          }
      });

    });

    //pega a requisição que vc acabou de criar e envia
    xhr.send()

});