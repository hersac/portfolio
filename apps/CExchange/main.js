
///Definimos variables globales
var cop;
var usd;
var resultado;
var select;

///Tomar valor de Eleccion en la etiqueta Select
function elect(){
	var select=document.getElementById('eleccion');
	var select2=document.getElementById('eleccion2');

	if(select.value==='cop'){
		select2.value='usd2'
	}else{
		select2.value='cop2';
	}

}

function elect2(){
	var select=document.getElementById('eleccion');
	var select2=document.getElementById('eleccion2');

	if(select2.value==='cop2'){
		select.value='usd'
	}else{
		select.value='cop';
	}

}


///Funcion del boton para convertir la divisa

function convert(){
	var btnConvert=document.getElementById("btnConvert");
	btnConvert.addEventListener('click', function(){

		var select=document.getElementById('eleccion');
		var display=document.querySelector('p');

		if(select.value==='cop'){

			let valor=document.getElementById("valor");

			var cop=valor.value;
			var usd=3968.15;
			var resultado=cop/usd;
			console.log(resultado);
			display.textContent="$ "+resultado.toFixed(2)+" USD";

		}else if(select.value==='usd'){

			let valor=document.getElementById("valor");

			var usd=valor.value;
			var cop=3968.15;
			var resultado=usd*cop;
			console.log(resultado);
			display.textContent="$ "+resultado.toFixed(2)+" COP";

		}else{
			alert("Elije una opcion");
		}

	});
}