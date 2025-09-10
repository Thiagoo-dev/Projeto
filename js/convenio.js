// Mostra os campos do convênio só quando marcar "Sim" (sem CSS)
(function () {
    const rSim = document.getElementById("convenio_sim");
    const rNao = document.getElementById("convenio_nao");
    const bloco = document.getElementById("convenio-dados");

    function toggleConvenio() {
        const show = rSim.checked;
        // exibe/oculta usando o atributo "hidden"
        bloco.hidden = !show;

        // habilita e torna required quando visível; desabilita/limpa quando oculto
        bloco.querySelectorAll("input").forEach((inp) => {
            inp.disabled = !show;
            if (show) {
                inp.setAttribute("required", "");
            } else {
                inp.removeAttribute("required");
                inp.value = "";
            }
        });
    }

    rSim.addEventListener("change", toggleConvenio);
    rNao.addEventListener("change", toggleConvenio);
    toggleConvenio(); // garante o estado inicial
})();