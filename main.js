const form = document.getElementById('form-infos');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

inputNome.value = '';
inputTel.value = '';

})