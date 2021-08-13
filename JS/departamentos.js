//Registrar evento click al presionar botones de envío
//y evento change al cambiar de opción en el elemento select
function iniciar(){
	var select = document.getElementById("selpaisnac");
	var select = document.getElementById("selpais");
	var button = document.getElementById("enviar");
	//Al producirse en evento change en el elemento select
	//invocar a la función addOptions para volver a llenar
	//el select dependiente con los datos adecuados
	if(select.addEventListener){
		select.addEventListener("change", function(){
		addOptions(marcas[this.options[this.selectedIndex].text],
		document.frmpais.seldep);
		}, false);
	}
	else{
		select.attachEvent("onchange", function(){
			addOptions(marcas[this.options[this.selectedIndex].text], document.frmpais.seldep);
		});
	}
	//Al producirse un click sobre el botón de envío
	//invoca los métodos del objeto pais que mostrarán
	//los valores ingresados en el formulario
	if(button.addEventListener){
		button.addEventListener("click", function(){
			var seleccion = showRadioSelected(document.frmpais.radgenero);
			pais.pedido(document.frmpais.selpais.value, document.frmpais.seldep.value, document.frmpais.nombre.value, document.frmpais.apellido.value, document.frmpais.selpaisnac.value,
				document.frmpais.edad.value, document.frmpais.email.value, document.frmpais.fechadeNacer.value, document.frmpais.telefonocasa.value, document.frmpais.telefonocelular.value, 
				document.frmpais.domicilio.value);
			pais.mostrar();
		}, false);
	}
	else{
		button.attachEvent("onclik", function(){
			var seleccion = showRadioSelected(document.frmpais.radgenero);
			pais.pedido(document.frmpais.selpais.value, document.frmpais.seldep.value);
			pais.mostrar();
		});
	}


	


}
//Inicializando matriz para manejar los departamentos y sus respectivos modelos
var marcas = new Array(7);
marcas["El Salvador"] = ["Sonsonate", "Santa Ana", "Ahuachapán", "Libertad", "Chalatenango", "Cuscatlán", "San Salvador", "Usulután", "San Miguel", "La Unión", "La Paz", "Cabañas", "San Vicente"];
marcas["Honduras"] = ["Atlántida", "Colón", "Comayagua", "Copán", "Cortés", "Choluteca",
"El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepque", "Olancho", "Santa Barbará",
"Valle", "Yoro"];
marcas["Nicaragua"] = ["Atlántico Norte", "Atlántico Sur", "Coupé", "Carazo", "Chinandenga", "Chontales", "Granada","Jinotega","León","Madriz", "Managua","Masaya","Matagalpa","Nueva Segovia","Río San Juan","Rivas"];
marcas["Guatemala"] = ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "Guatemala", "El Progreso", "Escuintla", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa","Petén","Quetzaltenango","Quiché","Retalhuleu","Sacatepequez","San Marcos","Santa Rosa","Sololá","Suchitepequez", "Totonicapán","Zacapa"];
marcas["Costa Rica"] = ["Heredia", "Guanacaste", "Puntaneras", "Limón", "Cartaga", "San José",
 "Alajuela"];
marcas["Panamá"] = ["Bocas del Toro", "Coclé", "Chiriqui", "Darién", "Herrera", "Los Santos Panamá", "Veraguas",
"Panmá Oeste"];

//Creando el objeto pais con el constructor Object()
var pais = new Object();
//Propiedades del objeto
pais.paisnac = "";
pais.modelo = "";
pais.name= "";
pais.apellido="";
pais.nace="";
pais.edad="";
pais.mail="";
pais.fn= "";
pais.tel = "";
pais.cell = "";
pais.domi="";
//Métodos del objeto
pais.pedido = function(paisnac, mod, nam, ape, paisn, ed, mail, fnac, casa, cel, dom){
	pais.paisnac = paisnac;
	pais.modelo = mod;
	pais.name=nam;
	pais.apellido=ape;
	pais.nace=paisn;
	pais.edad= ed;
	pais.email = mail;
	pais.fn = fnac;
	pais.tel = casa;
	pais.cell=cel;
	pais.domi= dom;
}
//Función para mostrar los datos
pais.mostrar = function(){
	var tabla = "";
	var info = document.getElementById('infotrabajador');
	tabla += "<table class=\"carinfo\">\n";
	tabla += "<thead>\n\t<tr>\n";
	tabla += "\t\t<th colspan=\"2\">Datos del trabajador</th>\n";
	tabla += "\t</tr>\n</thead>\n";
	tabla += "<tbody>\n\t";
	tabla += "\t<tr>\n\t\t<td>País de residencia: </td>\n";
	tabla += "\t\t<td>" + pais.paisnac + "</td>\n\t</tr>\n";
	tabla += "\t<tr>\n\t\t<td>Departamento: </td>\n";
	tabla += "\t\t<td>" + pais.modelo + "</td>\n\t</tr>\n";
	
	tabla += "\t<tr>\n\t\t<td>Nombre: </td>\n";
	tabla += "\t\t<td>" + pais.name + "</td>\n\t</tr>\n";
	
	tabla += "\t<tr>\n\t\t<td>Apellido: </td>\n";
	tabla += "\t\t<td>" + pais.apellido + "</td>\n\t</tr>\n";
	
	tabla += "\t<tr>\n\t\t<td>País nacimiento: </td>\n";
	tabla += "\t\t<td>" + pais.nace + "</td>\n\t</tr>\n";

	tabla += "\t<tr>\n\t\t<td>Edad: </td>\n";
	tabla += "\t\t<td>" + pais.edad + "</td>\n\t</tr>\n";

	tabla += "\t<tr>\n\t\t<td>Fecha nacimiento: </td>\n";
	tabla += "\t\t<td>" + pais.fn + "</td>\n\t</tr>\n";

	tabla += "\t<tr>\n\t\t<td>Email: </td>\n";
	tabla += "\t\t<td>" + pais.email + "</td>\n\t</tr>\n";

	tabla += "\t<tr>\n\t\t<td>Teléfono casa: </td>\n";
	tabla += "\t\t<td>" + pais.tel + "</td>\n\t</tr>\n";
	
	tabla += "\t<tr>\n\t\t<td>Celular: </td>\n";
	tabla += "\t\t<td>" + pais.cell + "</td>\n\t</tr>\n";


	tabla += "\t<tr>\n\t\t<td>Celular: </td>\n";
	tabla += "\t\t<td>" + pais.domi + "</td>\n\t</tr>\n";

	info.innerHTML = tabla;
}
function showRadioSelected(radiogroup){
	var seleccionado;
	var numradios = radiogroup.length;
	for(var i=0; i<numradios; i++){
		if(radiogroup[i].checked){
			seleccionado = radiogroup[i].value;
		}
	}
	return seleccionado;
}
function removeOptions(optionMenu){
	for(i=0; i<optionMenu.options.length; i++){
		optionMenu.options[i] = null;
	}
}
function addOptions(optionList, optionMenu){
	var i=0;
	removeOptions(optionMenu); //Limpia las opciones
	for(i=0; i<optionList.length; i++){
		optionMenu[i] = new Option(optionList[i], optionList[i]);
	}
}
//función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}
