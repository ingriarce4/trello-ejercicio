(function(){
	
	var agregarForma = document.getElementById("agregarForma");
	var button = document.getElementById("button2");
	var input = document.getElementById("input");
	var nuevoForm = document.getElementById("nuevoForma");
	var contenedor = document.getElementById("contenedor");
	var contador = 1;

	window.addEventListener("load", cargar);

	function cargar(){
		agregarForm.addEventListener("click", function(){
			hideElement(nuevoForma,agregarForma);
			input.focus();
			input.value="";
		});

		button.addEventListener("click", function(e){
			e.preventDefault();
			var contenedorLista = document.createElement("div");
			contenedorLista.classList.add("d-inlineblock");
	        
			var remover = nuevoForm.parentNode;
			contenedor.appendChild(contenedorLista);
			contenedorLista.appendChild(nuevoForma);
			contenedorLista.appendChild(agregarForma);
			remover.remove();

			var contenedorTarjetas = document.createElement("div");
			contenedorTarjetas.classList.add("trello-body");
			contenedor.insertBefore(contenedorTarjetas,contenedor.lastElementChild);
	        contenedorTarjetas.addEventListener("dragleave", dejarTrello);
	        contenedorTarjetas.addEventListener("dragover", arrastrarSobreTrello);
			contenedorTarjetas.addEventListener("drop", soltarTrello);
			contenedorTarjetas.addEventListener("dragend", terminaArrastrarTrello); 

			hideElement(nuevoForma,agregarForma);

			crearElementos("div", "nuevaLista", input.value, contenedorTarjeta);
			crearElementos("div", "agregar", "Añadir una tarjeta", contenedorTarjeta);

			var agregar = document.getElementsByClassName("agregar");
			agregar[agregar.length-1].addEventListener("click", function(){
				this.classList.add("d-none");
				newForm("form", "fomulario", contenedorTarjeta,this);
			});

		});	
	}