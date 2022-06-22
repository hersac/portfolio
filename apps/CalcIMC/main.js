

function calc(){
	let inH=document.getElementById('inHeight');
	let inW=document.getElementById('inWeight');
	let contentInfo=document.getElementById('info');
	let btnCalc=document.getElementById('btnCalc');
	btnCalc.addEventListener("click", function(){
		let h=inH.value;
		let w=inW.value;
		let result=w/Math.pow(h, 2);
		console.log(result.toFixed(2));
		
		if(result<=15){
			let ds=document.getElementById('ds');
			ds.classList.add('check');
		} else if(result>=16 && result<=16.99){
			let dm=document.getElementById('dm');
			dm.classList.add('check');
		} else if(result>=17 && result<=18.49){
			let da=document.getElementById('da');
			da.classList.add('check');
		} else if(result>=18.5 && result<=24.99){
			let pn=document.getElementById('pn');
			pn.classList.add('check');
		} else if(result>=25 && result<=29.99){
			let sp=document.getElementById('sp');
			sp.classList.add('check');
		} else if(result>=30 && result<=34.99){
			let oti=document.getElementById('oti');
			oti.classList.add('check');
		} else if(result>=35 && result<=39.99){
			let otii=document.getElementById('otti');
			otii.classList.add('check');
		} else if(result>=40 && result<=49.99){
			let otiii=document.getElementById('otiii');
			otiii.classList.add('check');
		} else if(result>50){
			let otiv=document.getElementById('otiv');
			otiv.classList.add('check');
		} else{
			alert("Hubo un error intentalo de nuevo");
		}

	let contentInfo=document.getElementById('contentInfo');

	let info=document.createElement('p');
	info.classList.add('info');
	info.innerText="Tu altura: " + h + "\n" + "Tu peso: " + w + "\n" + "Resultado IMC: " + result.toFixed(2);
	contentInfo.appendChild(info)

	let content=document.getElementById('content');
	let btnDelete=document.createElement('button');
	btnDelete.innerText='Again';
	btnDelete.classList.add('btnDelete');
	content.appendChild(btnDelete);

	btnDelete.addEventListener('click', function(){
			location.reload();
		});

	});

}
