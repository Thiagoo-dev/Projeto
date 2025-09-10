// Arquivo: scripts/filtroProfissionais.js

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mapeamento de especialidades para profissionais
    const profissionaisPorEspecialidade = {
        'Cardiologista': ['Andrei Silva (Cardiologista)'],
        'Clínico Geral': ['Daniela Silva (Clínico Geral)'],
        'Dentista': ['Arnaldo Trindade (Dentista)'],
        'Dermatologista': ['Victor Assayag (Dermatologista)'],
        'Ginecologista': ['Carlos Teixeira (Ginecologista)'],
        'Oftalmologista': ['Thiago Ribeiro (Oftalmologista)'],
        'Otorrinolaringologista': ['Hyago Lima (Otorrino)'],
        'Ortopedista': ['Jackeline Fioravante (Ortopedista)'],
        'Pediatria': ['Gabriel Ribeiro (Pediatria)'],  // Ultimas 3 variaveis adicionadas por Thiago
        'Fisioterapia': ['Cinthia Costa (Fisioterapia)'],
        'Neurologista': ['Wellington Ferreira (Neurologista)']
    };

    const especialidadeSelect = document.getElementById('especialidade');
    const profissionalSelect = document.getElementById('profissional');

    // 2. Função que atualiza o menu de profissionais
    function atualizarProfissionais() {
        const especialidadeSelecionada = especialidadeSelect.value;
        const profissionais = profissionaisPorEspecialidade[especialidadeSelecionada] || [];

        // Limpa as opções atuais do menu de profissionais
        profissionalSelect.innerHTML = '<option value="">Escolha sua Consulta</option>';

        // Adiciona as novas opções filtradas
        profissionais.forEach(nomeProfissional => {
            const option = document.createElement('option');
            option.value = nomeProfissional;
            option.textContent = nomeProfissional;
            profissionalSelect.appendChild(option);
        });
    }

    // 3. Adiciona o ouvinte de evento
    especialidadeSelect.addEventListener('change', atualizarProfissionais);

    // Chama a função uma vez ao carregar a página para garantir o estado inicial correto
    atualizarProfissionais();
});




// Arquivo: scripts/restricaoHorarios.js

document.addEventListener('DOMContentLoaded', function () {
    // 1. Mapeamento de horários por turno
    const horariosPorTurno = {
        manha: ['08:00', '09:00', '10:00', '11:00'],
        tarde: ['13:00', '14:00', '15:00', '16:00'],
        noite: ['19:00', '20:00', '21:00', '22:00']
    };

    // 2. Referência aos elementos do DOM
    const turnosRadio = document.querySelectorAll('input[name="turno"]');
    const horarioSelect = document.getElementById('horario');

    // 3. Função para atualizar o menu de horários
    function atualizarHorarios() {
        // Encontra o turno selecionado
        const turnoSelecionado = document.querySelector('input[name="turno"]:checked').value;
        const horarios = horariosPorTurno[turnoSelecionado] || [];

        // Limpa as opções atuais do menu de horários
        horarioSelect.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Selecione...';
        horarioSelect.appendChild(defaultOption);

        // Adiciona as novas opções
        horarios.forEach(horario => {
            const option = document.createElement('option');
            option.value = horario;
            option.textContent = horario;
            horarioSelect.appendChild(option);
        });
    }

    // 4. Adiciona um ouvinte de evento para cada rádio
    turnosRadio.forEach(radio => {
        radio.addEventListener('change', atualizarHorarios);
    });

    // Chama a função ao carregar a página para definir o estado inicial (manhã)
    atualizarHorarios();
});