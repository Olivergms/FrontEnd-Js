
//pegando todos os itens da classe paciente e fazendo um array
var listapacientes = document.querySelectorAll(".paciente");

//percorrendo o array e calculando imc
for (var i=0; i<listapacientes.length; i++){
    
        var paciente = listapacientes[i];  
        
        var tdnome = paciente.querySelector(".info-peso");
        var nome = tdnome.textContent;

        var tdpeso = paciente.querySelector(".info-peso");
        var peso = tdpeso.textContent;

        var tdaltura = paciente.querySelector(".info-altura");
        var altura = tdaltura.textContent;

        var tdimc = paciente.querySelector(".info-imc");
        var imc = calculaImc(peso,altura);
        tdimc.textContent = imc;
       
        var tdclassificacao = paciente.querySelector(".info-classificacao");

        tdclassificacao.textContent = classificaImc(imc);

        var pesoEhValido = validaPeso(peso);    //retorna true or false


        if(!pesoEhValido){
               
                pesoEhValido = false;
                tdpeso.textContent = "Peso Inválido";
               paciente.classList.add("paciente-invalido");
        }
        var alturaEhValida = validaAltura(altura);

        if(!alturaEhValida){
                
                tdaltura.textContent = "Altura invalida";
                alturaEhValida = false;
                paciente.classList.add("paciente-invalido");
        }


        
}


//---------------------------------------------------------

function calculaImc(peso, altura){
        var imc = 0;

        imc  = peso/(altura * altura);
        return imc.toFixed(2);
}

function classificaImc(imc){

        if(imc<18.5){
                classificacao = "magreza";
        }else if(imc>18.5 && imc <24.9){
                classificacao = "Saudável";
        }else if(imc>=25 && imc<30){
                classificacao = "sobrepeso";
        }else if(imc>=30 && imc<35){
                classificacao = "obesidade grau I";
        }else if(imc >=35 && imc< 40){
                classificacao = "obesidade grau II";
        }else{
                classificacao = "obesidade grau III";
        }      
        return classificacao;
}

function validaPeso(peso){
        if (peso>=0 && peso<400){
                return true;
        }else{
                return false;
        }
}

function validaAltura(altura){
        if(altura>=0 && altura<3.0){
                return true;
        }else{
                return false;
        }
}