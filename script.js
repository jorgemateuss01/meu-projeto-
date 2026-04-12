const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#60a5fa";
        link.style.borderBottom = "2px solid #60a5fa";
    }
});


window.addEventListener("load", () => {
    const container = document.querySelector(".container");
    if (container) {
        container.classList.add("show");
    }
});


function jogar() {
    alert("O jogo vai iniciar!");


    function abrirJogo() {
    const area = document.getElementById("area-jogo");
    area.style.display = "block";
}
}

function mostrarNome() {
  let nome = document.getElementById("nomeInput").value;
  document.getElementById("mensagem").innerText =
    "Bem-vindo, " + nome + " Se Prepare para fugir das cobras";
}