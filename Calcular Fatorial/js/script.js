function calcularFat() {
  // Obtém o valor do input com id "numero" e o converte de string para inteiro
  let valor = parseInt(document.getElementById("numero").value);

  // Verifica se o valor não é um número (NaN) ou se é menor que 0
  if (isNaN(valor) || valor < 0) {
    // Se o valor for inválido, exibe uma mensagem de erro na div com id "resultado"
    document.getElementById("resultado").innerText =
      "Por favor, insira um número válido maior ou igual a zero.";
    // Sai da função sem continuar a execução
    return;
  }

  // Calcula o fatorial do valor utilizando a função fat
  let resultado = fat(valor);

  // Exibe o resultado na div com id "resultado"
  document.getElementById(
    "resultado"
  ).innerText = `O fatorial de ${valor} é ${resultado}.`;
}

function fat(v) {
  // Caso base: se o valor for 0, o fatorial é 1 por definição
  if (v === 0) {
    return 1;
  }
  // Outro caso base: se o valor for 1 ou 2, o fatorial é o próprio valor
  else if (v <= 2) {
    return v;
  }
  // Caso recursivo: calcula o fatorial multiplicando o valor atual pelo fatorial do valor anterior
  else {
    return v * fat(v - 1);
  }
}
