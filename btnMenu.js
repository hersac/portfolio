
/*Funcion del menu flotante*/

let btnMenu;
let globalMenu;
contador=1;

function mostrar() {

    btnMenu = document.querySelector("#btnMenu");
    btnMenu.addEventListener('click', function() {

        if(contador==1){
            globalMenu = document.querySelector("#nav");
            globalMenu.className="nav2"
            contador=0;
        }   
        else{
            globalMenu = document.querySelector("#nav");
            globalMenu.className="nav";
            contador=1;
        }
    })
}


window.addEventListener('load', mostrar);