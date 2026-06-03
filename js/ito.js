let numeros = [];
let indiceAtual = 0;
let revelados = [];

const numeroEl = document.getElementById("numero");
const contadorEl = document.getElementById("contador");
const todosNumerosEl = document.getElementById("todosNumeros");

function gerarNumeros() {
    const quantidade = parseInt(
        document.getElementById("qtdNumeros").value
    );

    if (isNaN(quantidade) || quantidade < 1 || quantidade > 100) {
        alert("Informe uma quantidade entre 1 e 100.");
        return;
    }

    numeros = [];

    while (numeros.length < quantidade) {
        const n = Math.floor(Math.random() * 100) + 1;

        if (!numeros.includes(n)) {
            numeros.push(n);
        }
    }

    indiceAtual = 0;
    revelados = Array(quantidade).fill(false);
    todosNumerosEl.innerHTML = "";

    atualizarTela();
}

function atualizarTela() {
    contadorEl.textContent =
        `${indiceAtual + 1}/${numeros.length}`;

    if (revelados[indiceAtual]) {
        numeroEl.textContent = numeros[indiceAtual];
        numeroEl.classList.remove("oculto");
    } else {
        numeroEl.textContent = "?";
        numeroEl.classList.add("oculto");
    }
}

document.getElementById("btnGerar").addEventListener("click", gerarNumeros);

document.getElementById("btnMostrar").addEventListener("click", () => {
    revelados[indiceAtual] = !revelados[indiceAtual];
    atualizarTela();
});

document.getElementById("btnAnterior").addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        atualizarTela();
    }
});

document.getElementById("btnProximo").addEventListener("click", () => {
    if (indiceAtual < numeros.length - 1){
        indiceAtual++;
        atualizarTela();
    }
});

document.getElementById("btnRevelarTodos").addEventListener("click", () => {
    revelados.fill(true);

    atualizarTela();

    todosNumerosEl.innerHTML =
        "<h3>Todos os números:</h3>" +
        numeros.map((n, i) => `${i + 1}: ${n}`).join("<br>");
});

gerarNumeros();