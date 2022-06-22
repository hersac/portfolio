function addWork(){

	//Definir variables y asignar elementos 

	let inNew=document.getElementById("tareaNueva").value;
	let btnNew=document.getElementById("btnNuevo");
	let list=document.getElementById("lista");

	//Crear Elementos

	let newSpace = document.createElement('div');
	let li = document.createElement('li');
	let btnDelete = document.createElement('button');
	let btnCheck = document.createElement('button');

	//Funcion de Botones

	btnDelete.addEventListener("click", function(){
		newSpace.remove();
	});
	btnCheck.addEventListener("click", function(){
		li.classList.toggle('tachar');
	});



	//Clases de Elementos creados

	newSpace.classList.add('newSpace');
	li.classList.add('work');
	btnDelete.classList.add('btnDelete');
	btnCheck.classList.add('btnCheck');

	//Asignar Nodos

	li.innerText = inNew;
	newSpace.appendChild(li);

	btnDelete.innerHTML='Borrar';
	newSpace.appendChild(btnDelete);

	btnCheck.innerHTML='Listo';
	newSpace.appendChild(btnCheck);

	list.appendChild(newSpace);
	inNew="";
}




