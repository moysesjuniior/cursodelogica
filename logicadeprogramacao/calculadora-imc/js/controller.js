var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function() {var paciente = lePaciente();pacientes.push( paciente );mostraPaciente(paciente);});

var botao = document.getElementById("relatorio");
botao.addEventListener('click', function() {gerarRelatorio( pacientes );});