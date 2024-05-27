function calcularRaizes() {
  const a = parseFloat(document.getElementById("coefA").value);
  const b = parseFloat(document.getElementById("coefB").value);
  const c = parseFloat(document.getElementById("coefC").value);
  const delta = b * b - 4 * a * c;
  const raizUnica = -b / (2 * a);
  const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
  const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

  // Verificação de NaN
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("result").innerText =
      "Por favor, insira valores válidos para os coeficientes.";
    return;
  }
  if (delta < 0) {
    document.getElementById("result").innerText = `Não há raizes reais.`;
  } else if (delta === 0) {
    document.getElementById(
      "result"
    ).innerText = `A única raíz é ${raizUnica}.`;
  } else {
    document.getElementById(
      "result"
    ).innerText = `As raízes são: ${raiz1} e ${raiz2}.`;
  }
}
