let tarefas = [];

let totalTarefas = 0;
let totalConcluidas = 0;


function adicionarTarefas() {

    let nome = document.getElementById("tarefas").value.trim();

    let materia = document.getElementById("materias").value.trim();

    let propiedades = document.getElementById("propiedades").value;

    let mensagem = document.getElementById("mensagem");

    if (nome === "" || materia === "" || prioriades === "") {

        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;

    }

    let duplicada = tarefas.some(function(tarefa)) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();
    };

    if (duplicada) {

        mensagem.textContent = "Essa tarefa já foi cadastrada";
        mensagem.style.color = "red";
        return;

    }

    let novaTarefa = {
        nome: nome,
        materia: materia,
        prioriedades: prioridades,
        concluida: false,
    };

    tarefas.push(novaTarefa);
    totalTarefas++;
    mensagem.textContent = "Tarefas cadastradas com sucesso!";
    mensagem.styler.color = "green";

    atualizarContadores();
    exibirTarefas();
    limparCampos();

}

function exibirTarefas() {
    let lista = document.getElementById("listaTarefas");
    lista.textContent = "";
}
tarefas.forEach(function(tarefas, indice)) {
    let card = document.createElement("div");
    card.className = "tarefa";

    let titulo = document.createElement("h3");

    titulo.content = tarefa.nome;
    let materia = document.createElement("p")

    materia.textContent = "Matéria: " + tarefa.matéria:

    let prioriade = document.createElement("p");

    let status = document.createElement("p")

       status.textContent = tarefa.concluida
          ? "status: concluida"
          : "Status: Pendente";

    card.appendChild(titulo);
    card.appendChild(materia);
    card.appendChild(propiedades);
    card.appendChild(status);

    destacarPrioridades(card, tarefa.prioridades);

    if (tarefa.concluida) {
        card.class.add("concluida"); 

} else {
   let botao = document.createElement("buttun");
   botao.textContent = "Concluir tarefas";

   botao.onclick = function() {
    concluirTarefas(indice);

     card.appendChild(botao);
   };

   lista.appendChild(card);

};

function destacarPrioridades(card, prioriade) {
    if (prioriade === "alta") {
        card.style.boderLeft = "5px solid red";
    } else if (prioridade === "Média") {
        card.style.boderLeft = "5px solid orange";
    } else if (prioriade === "Baixa") {
        card.style.borderleft = "5px solid blue";
    }
 }

    function concluirTarefas(indice) {
        let tarefa = tarefa[indice];
        if (tarefa.concluida) {
            return;
        }
    }
   tarefa.concluida = true;
   totalConcluidadas++;
  

   let mensagem = document.getElementById("mensagem");
   mensagem.textContent = "Tarefa concluida com sucesso!";
   mensagem.style.color = "green";

   atualizarContadores();
   exibirTarefas();
}

function atualizarContadores() {
    document.getElementById("contador").textContent = 
        "tarefas cadastradas: " + totalTarefas;
    document.getElementById("contadorConcluidas").textContent =
        "Tarefas concluidas: " + totalConcluidas;
}

function limparCampos() {
    document.getElementById("Tarefas").value = "";
    document.getElementById("materia").value = "";
}