// Variables
const gastos = [];
let totalGastos = 0;

// Elementos del DOM
const descripcionInput = document.getElementById("descripcion");
const montoInput = document.getElementById("monto");
const gastosLista = document.getElementById("gastosLista");
const errorDiv = document.getElementById("error");
const totalGastosDiv = document.getElementById("totalGastos");
const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");

// Función para agregar un gasto
function agregarGasto() {
    const descripcion = descripcionInput.value.trim();
    const monto = parseFloat(montoInput.value);

    // Validar datos
    if (!descripcion || isNaN(monto) || monto <= 0) {
        errorDiv.textContent = "Por favor, ingresa una descripción y un monto válido.";
        return;
    }
    
    errorDiv.textContent = ''; // Limpiar el mensaje de error

    const gasto = {
        descripcion: descripcion,
        monto: monto
    };

    gastos.push(gasto);
    descripcionInput.value = '';
    montoInput.value = '';
    
    mostrarGastos();
}

// Función para mostrar los gastos
function mostrarGastos() {
    gastosLista.innerHTML = '';

    gastos.forEach((gasto, index) => {
        const divGasto = document.createElement("div");
        divGasto.classList.add("gasto-item");

        divGasto.innerHTML = `
            <span>${gasto.descripcion} - S/ ${gasto.monto.toFixed(2)}</span>
            <button onclick="eliminarGasto(${index})">Eliminar</button>
        `;

        gastosLista.appendChild(divGasto);
    });
}

// Función para eliminar un gasto
function eliminarGasto(index) {
    gastos.splice(index, 1); // Eliminar el gasto del arreglo
    mostrarGastos();
}

// Función para calcular el total de los gastos
function calcularTotal() {
    totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);
    totalGastosDiv.textContent = `Total de Gastos: S/ ${totalGastos.toFixed(2)}`;
}

// Eventos
btnAgregar.addEventListener("click", agregarGasto);
btnCalcular.addEventListener("click", calcularTotal);
