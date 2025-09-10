// Lê dados salvos no agendamento
const raw = localStorage.getItem('cuidar_agendamento');
if (raw) {
  try {
    const d = JSON.parse(raw);

    document.getElementById('nome-paciente').textContent = d.nome || '—';
    document.getElementById('sobrenome-paciente').textContent = d.sobrenome || '—'; // adicionado outra variavel para se usar o bootstrap feito por Thiago
    document.getElementById('servico-agendado').textContent = (d.especialidade && d.profissional)
      ? `${d.especialidade} com ${d.profissional}`
      : '—';

    if (d.data) {
      const dt = new Date(d.data + 'T00:00:00');
      document.getElementById('data-agendada').textContent = dt.toLocaleDateString('pt-BR');
    } else {
      document.getElementById('data-agendada').textContent = '—';
    }

    document.getElementById('horario-agendado').textContent = d.horario || '—';
  } catch (e) {
    console.warn('Dados inválidos de agendamento');
  }
} else {
  // Se entrou sem passar pelo agendamento
  document.querySelector('.card p').textContent = 'Sem dados de agendamento. Preencha o formulário primeiro.';
}

// 👉 Comando de impressão no botão
const btnImprimir = document.getElementById('btn-imprimir');
if (btnImprimir) {
  btnImprimir.addEventListener('click', function (e) {
    e.preventDefault();
    window.print();
  });
}
