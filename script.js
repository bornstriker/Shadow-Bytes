// script.js
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulação da validação no lado do frontend
    if (username === "admin" && password === "admin") {
       // celebrationEffect();
        // fireworksEffect();
        setTimeout(function () {
            alert("PARABÉNS! Sua missão foi concluída com sucesso!\nFale com os administradores para reivindicar sua recompensa.");
        }, 5000);  // Atraso de 5 segundos para dar tempo para os efeitos
        return false;  // Retorne false para evitar a submissão do formulário padrão
    } else {
        alert("Login falhou. Tente novamente.");
        return false;
    }
}

function celebrationEffect() {
    var confettiSettings = { target: 'celebration-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function fireworksEffect() {
    var fireworks = new Fireworks();
    fireworks.start();
}
