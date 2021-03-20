function calculaIMC(peso, altura) {var imc = peso/(altura**2); return imc;}

function verificaIMC (imc) {
    var situacao = null;

    if (imc < 18.5) {situacao = 'Magreza';} else if (imc >= 18.5 && imc <= 24.9) {situacao = 'Normal';} else if (imc > 24.9 && imc <= 30) {situacao = 'Sobrepeso';} else {situacao = 'Obesidade';} return situacao;}

function mostraPaciente( paciente ) {
    var imc = calculaIMC( paciente.peso, paciente.altura );
    var situacao = verificaIMC(imc);

    var spanNome = document.getElementById("nome");
    spanNome.innerHTML = paciente.nome;
    
    var spanPeso = document.getElementById("peso");
    spanPeso.innerHTML = paciente.peso;
    
    var spanAltura = document.getElementById("altura");
    spanAltura.innerHTML = paciente.altura;
    
    var spanImc = document.getElementById("imc");
    spanImc.innerHTML = imc.toFixed(2);
    
    var spanSituacao = document.getElementById("situacao");
    spanSituacao.innerHTML = situacao;}

function lePaciente() {
    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente = {
        nome : inputNome.value,
        peso : inputPeso.value,
        altura : inputAltura.value}

    return paciente;}

function gerarRelatorio ( pacientes ) {
    var listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = "";

    pacientes.forEach( ( paciente ) => {
        var imc = calculaIMC( paciente.peso, paciente.altura );
        var sit = verificaIMC( imc );
        listaNumerada.innerHTML += `<li> ${paciente.nome} - Situação: ${sit}</li>`;});}