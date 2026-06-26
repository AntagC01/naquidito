// Recursos fáceis de editar

const recursos = {
    madeira: 0,
    pedra: 0,
    ferro: 0,
    testosterona: 0
};

function atualizarRecursos(){

    const lista = document.getElementById("lista-recursos");

    lista.innerHTML = "";

    for(const nome in recursos){

        lista.innerHTML += `
            <div class="recurso">
                <span>${nome}</span>
                <strong>${recursos[nome]}</strong>
            </div>
        `;
    }

    document.getElementById("madeiraValor").textContent = recursos.madeira;
    document.getElementById("pedraValor").textContent = recursos.pedra;
    document.getElementById("ferroValor").textContent = recursos.ferro;
}

function produzirMadeira(){
    recursos.madeira++;
    atualizarRecursos();
}

function produzirPedra(){
    recursos.pedra++;
    atualizarRecursos();
}

function produzirFerro(){
    recursos.ferro++;
    atualizarRecursos();
}

function abrirUpgrades(){
    window.location.href = "upgrades.html";
}

window.onload = atualizarRecursos;