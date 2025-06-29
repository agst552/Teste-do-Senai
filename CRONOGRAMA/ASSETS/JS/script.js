function gerarCalendarioPorMes(mesSelecionado) {
  const wrapper = document.getElementById('calendario-descer');
  const titulo = document.getElementById('titulo-calendario');
  const semana = document.getElementById('semana');
  const calendario = document.getElementById('calendario');

  wrapper.style.display = 'block';

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const diaHoje = hoje.getDate();

const data = new Date(ano, mesSelecionado);
  let mesAno = data.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

  mesAno = mesAno.charAt(0).toUpperCase() + mesAno.slice(1);

  titulo.textContent = `Calendário - ${mesAno}`;


  semana.innerHTML = '';
  calendario.innerHTML = '';

  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  diasSemana.forEach(dia => {
    const div = document.createElement('div');
    div.textContent = dia;
    semana.appendChild(div);
  });

  const primeiroDia = new Date(ano, mesSelecionado, 1);
  const ultimoDia = new Date(ano, mesSelecionado + 1, 0);
  const totalDias = ultimoDia.getDate();
  const diaSemana = primeiroDia.getDay();

  for (let i = 0; i < diaSemana; i++) {
    const vazio = document.createElement('div');
    calendario.appendChild(vazio);
  }

  for (let dia = 1; dia <= totalDias; dia++) {
    const divDia = document.createElement('div');
    divDia.className = 'dia';
    divDia.textContent = dia;

    if (dia === diaHoje && mesSelecionado === hoje.getMonth()) {
      divDia.classList.add('hoje');
    }

    divDia.addEventListener('click', () => {
      const painel = document.getElementById('painel-dia');
      const tituloDia = document.getElementById('titulo-dia');
      const conteudoDia = document.getElementById('conteudo-dia');

      const dataFormatada = `${String(dia).padStart(2, '0')}/${String(mesSelecionado + 1).padStart(2, '0')}/${ano}`;
      painel.style.display = 'flex';
      tituloDia.textContent = `Detalhes do dia ${dataFormatada}`;
      conteudoDia.textContent = `Aqui você pode exibir ou salvar eventos para ${dataFormatada}.`;
    });

    calendario.appendChild(divDia);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('cronogramaBtn');
  if (select) {
    select.addEventListener('change', () => {
      const mesSelecionado = parseInt(select.value);
      if (!isNaN(mesSelecionado)) {
        gerarCalendarioPorMes(mesSelecionado);
      }
    });
  }
});

const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
});

