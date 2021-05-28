//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const calcularTiempoTotal = document.querySelector("#boton-enviar-formulario");

calcularTiempoTotal.onclick = function () {
	let horas = Number(document.querySelector("#horas").value);
	let minutos = Number(document.querySelector("#minutos").value);
	let segundos = Number(document.querySelector("#segundos").value);
	let devolverTiempoTotal = document.querySelector("strong");

	if (minutos >= 60) {
		horas += 1;
		minutos -= 60;
	} else if (segundos >= 60) {
		minutos += 1;
		segundos -= 60;
	}

	devolverTiempoTotal.innerText = `El video tiene ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

	console.log(horas, minutos, segundos);

	return false;
};
