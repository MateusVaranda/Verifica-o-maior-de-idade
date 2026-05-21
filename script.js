const idade = document.getElementById('idade');
const resultado = document.getElementById('resultado');

function verificarMaioridade() {
    const idadeValor = parseInt(idade.value);
    
    idadeValor >= 18 ? resultado.textContent = "Você é maior de idade, você tem " + idadeValor + " anos." : resultado.textContent = "Você é menor de idade, você tem " + idadeValor + " anos.";
    

}


