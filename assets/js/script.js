function calcularLucro() {
    // Pega os valores dos inputs
    const kmMes = parseFloat(document.getElementById('kmMes').value);
    const kmMediaCarro = parseFloat(document.getElementById('kmMediaCarro').value);
    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    const multa = parseFloat(document.getElementById('multa').value);
    const manutencao = parseFloat(document.getElementById('manutencao').value);
    const valorGanhoApp = parseFloat(document.getElementById('valorGanhoApp').value);
    
    // Calcula o gasto de combustível por mês
    const gastoCombustivel = (kmMes / kmMediaCarro) * valorCombustivel;
    
    // Calcula o ganho líquido
    const ganhoLiquido = valorGanhoApp - multa - manutencao - gastoCombustivel;
    
    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `O lucro líquido do motorista é R$ ${ganhoLiquido.toFixed(2)} por mês.`;
}    