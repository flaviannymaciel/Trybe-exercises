let nota = 101;

if (nota < 0 || nota > 100) {
  console.log("Erro: Nota inválida");
}
else if (nota >= 90) {
  console.log("Grupo A");
}
else if (nota >= 80) {
  console.log("Grupo B");
}
else if (nota >= 70) {
  console.log("Grupo C");
}
else if (nota >= 60) {
  console.log("Grupo D");
}
else if (nota >= 50) {
  console.log("Grupo E");
}
else {
  console.log("Grupo F");
}