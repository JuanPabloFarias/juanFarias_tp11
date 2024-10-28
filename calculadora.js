function calculadora(num1, num2, operador){
    switch (operador) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
        default:
            return console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir")
            break;
    }
    console.log(resultado);
}

calculadora(2, 3, "suma");
calculadora(2, 3, "resta");
calculadora(2, 3, "multiplicacion");
calculadora(2, 3, "division");
calculadora(2, 3, "%%%%%");