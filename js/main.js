
let nombreUsuario = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apelllido")
alert("Bienvenido "+ nombreUsuario + apellido);
console.log(nombreUsuario);

function calcular() {
    let monto = parseFloat(document.getElementById('montoInput').value);
    let tipoCalculo = document.getElementById('tipoCalculo').value;
    let resultado = document.getElementById('resultado');

    if (tipoCalculo === 'condicional') {
        if (monto > 0 && monto <= 1000) {
            resultado.textContent = 'El monto total a pagar es: $' + (monto * 1.1).toFixed(2);
        } else if (monto > 1000 && monto <= 5000) {
            resultado.textContent = 'El monto total a pagar es: $' + (monto * 1.05).toFixed(2);
        } else if (monto > 5000) {
            resultado.textContent = 'El monto total a pagar es: $' + (monto * 1.02).toFixed(2);
        } else {
            resultado.textContent = 'Por favor ingresa un monto válido.';
        }
    } else if (tipoCalculo === 'ciclo') {
        var cuotas = 12;
        var montoTotal = monto;
        var interes = 0.05;

        for (var i = 1; i <= cuotas; i++) {
            montoTotal += montoTotal * interes;
        }

        resultado.textContent = 'El monto total a pagar en ' + cuotas + ' cuotas es: $' + montoTotal.toFixed(2);
    } else {
        resultado.textContent = '';
    }
}
