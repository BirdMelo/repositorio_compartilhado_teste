const button = document.querySelector("#button");
const input = document.querySelector("#numero");


button.addEventListener("click", () => {
    const numero  = input.value;

    if (numero === "") {
        alert("Por favor, insira um número.");
        return;
    } else if (numero < 0) {
        alert("Por favor, insira um número maior ou igual a 0.");
        return;
    } else if (numero % 2 == 0) {
        alert(`O número ${numero} é par.`);
    } else if (numero % 2 != 0) {
        alert(`O número ${numero} é ímpar.`);
    } else {
        alert("Erro não detectado.");
    }
})