// Limita RG (8 dígitos) e CPF (11 dígitos) no mesmo campo (feito por Arnaldo Trindade e ajuda do ChatGPT)
(function () {
  const rgCpfInput = document.getElementById('numero_rg_cpf');
  const rRG = document.getElementById('doc_rg');
  const rCPF = document.getElementById('doc_cpf');

  function aplicarMascara() {
    let v = rgCpfInput.value.replace(/\D/g, "");
    if (rRG.checked) {
      rgCpfInput.maxLength = 8;
      rgCpfInput.value = v.slice(0, 8);
    } else {
      // CPF com pontos e traço
      rgCpfInput.maxLength = 14;
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      rgCpfInput.value = v.slice(0, 14);
    }
  }

  if (rgCpfInput) {
    rgCpfInput.addEventListener("input", aplicarMascara);
    rRG.addEventListener("change", aplicarMascara);
    rCPF.addEventListener("change", aplicarMascara);
  }
})();

// Máscara de Telefone/WhatsApp
(function () {
  const tel = document.getElementById('documento');
  const contato = document.getElementById('contato');

  function maskPhone(e) {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = v.slice(0, 15);
  }

  if (tel) tel.addEventListener("input", maskPhone);
  if (contato) contato.addEventListener("input", maskPhone);
})();

// Sugestão para email
(function () {
  const email = document.getElementById('email');
  if (email) {
    email.addEventListener("blur", function () {
      if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Digite um email válido, por exemplo: exemplo@.com");
      }
    });
  }
})();

// Máscara e preenchimento automático do CEP, e ajustado para preencher apenas se a opção estiver marcada,
// ajustado por Arnaldo Trindade as 19:26 de 07/09/2025
(function () {
  const cep = document.getElementById('cep');
  const autoCep = document.getElementById('autoCep');
  if (!cep) return;

  const camposEndereco = [
    "logradouro",
    "bairro",
    "cidade",
    "uf"
  ];

  function limparCampos() {
    camposEndereco.forEach(id => {
      const campo = document.getElementById(id);
      if (campo) campo.value = "";
    });
  }

  function maskCep(e) {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = v.slice(0, 9);
  }

  cep.addEventListener("input", maskCep);

  cep.addEventListener("blur", function () {
    let valor = cep.value.replace(/\D/g, "");
    if (valor.length !== 8 || !autoCep.checked) return;

    fetch(`https://viacep.com.br/ws/${valor}/json/`)
      .then(r => r.json())
      .then(dados => {
        if (!dados.erro) {
          document.getElementById('logradouro').value = dados.logradouro || "";
          document.getElementById('bairro').value = dados.bairro || "";
          document.getElementById('cidade').value = dados.localidade || "";
          document.getElementById('uf').value = dados.uf || "";
        }
      })
      .catch(err => console.error("Erro ao buscar CEP:", err));
  });

  // Quando desmarcar a opção, limpa os campos
  autoCep.addEventListener("change", function () {
    if (!autoCep.checked) {
      limparCampos();
    }
  });
})();

