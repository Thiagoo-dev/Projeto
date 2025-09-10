(function () {
    const form = document.querySelector("form"); // pega o 1º formulário da página
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // coleta rápida dos campos (se existirem)
        const val = (id) => (document.getElementById(id) || {}).value || "";
        const payload = {
            nome: val("nome"),
            sobrenome: val("sobrenome"), // adicionado outra variavel para se usar o bootstrap feito por Thiago
            especialidade: val("especialidade"),
            profissional: val("profissional"),
            data: val("data"),
            horario: val("horario"),
        };

        // guarda para a confirmação ler
        try {
            localStorage.setItem("cuidar_agendamento", JSON.stringify(payload));
        } catch (_) { }

        // vai para a Página 3 (Victor)
        window.location.href = "confirmacao.html";
    });
})();