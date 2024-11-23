const operaciones = [500, 1000, 500, 10, -900, -200, 3000, -5000, 2000, -1500];

function calcularBalances(operaciones) {
    // Inicializamos las variables antes del ciclo
    let totalDeposito = 0;
    let totalRetiro = 0;

    // Recorremos todas las operaciones
    for (let i = 0; i < operaciones.length; i++) {
        if (operaciones[i] > 0) {
            totalDeposito += operaciones[i]; // Sumamos los depósitos
        } else if (operaciones[i] < 0) {
            totalRetiro += operaciones[i]; // Sumamos los retiros
        }
    }

    // Calcular saldo actual
    let saldoActual = totalDeposito + totalRetiro;


    return {
        totalDepositos: totalDeposito,
        totalRetiros: totalRetiro,
        saldoActual: saldoActual,
    };
}

function bankBalance(name, lastName, operaciones) {
    const balances = calcularBalances(operaciones);

    return `Estimada ${name} ${lastName}:
El monto total de los depósitos es de: $${balances.totalDepositos}.
El monto total de los retiros es de: $${Math.abs(balances.totalRetiros)}.
Por lo tanto, su saldo actual en la cuenta es de: $${balances.saldoActual}.`;
}

// Prueba 1
console.log(bankBalance("Gloria", "Medina", operaciones));

/*
// Prueba 2 (puedes descomentar para probar con otros datos)
const operaciones2 = [1000, -200, -1000, 3000, 100, 1500, -500];
console.log(bankBalance("Carlos", "Gomez", operaciones2));

// Prueba 3 (un cliente con solo depósitos)
const operaciones3 = [500, 1000, 3000, -600, 1100, 9, -999, 2000];
console.log(bankBalance("Ana", "Pérez", operaciones3));

// Prueba 4 (un cliente con solo retiros)
const operaciones4 = [-2000, -5000, -1500, 500, 11000, -899, 450];
console.log(bankBalance("Luis", "Méndez", operaciones4));
*/

// Exportación de la función
module.exports = bankBalance;
