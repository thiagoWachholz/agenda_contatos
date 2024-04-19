const form = document.getElementById('form-agenda');
const body = document.getElementById('corpo-agenda');

let linhas = '';

function valida_numero(numero) {
    return numero.length >= 11;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = document.getElementById('numero-contato');
    const nome = document.getElementById('nome-contato');

    if (valida_numero(numero.value)) {
        document.getElementById('error-message').style.display = 'none';

        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${numero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        document.querySelector('tbody').innerHTML = linhas;

        numero.value = '';
        nome.value = '';
    } else {
        document.getElementById('error-message').style.display = 'initial';
    }
})