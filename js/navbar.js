var sesiones = [];
window.onload = init;
function init(){
	console.log("ENTRA A INIT");
	asignarVariables();
	asignarEventos();
}

function asignarVariables() {
	console.log("ENTRA A asignar variables");
	
  sesiones["about.html"] = document.getElementById("about.html");
  sesiones["gallery.html"] = document.getElementById("gallery.html");
  sesiones["news.html"] = document.getElementById("news.html");
  sesiones["schedule.html"] = document.getElementById("schedule.html");
  sesiones["drivers.html"] = document.getElementById("drivers.html");
  sesiones["index.html"] = document.getElementById("index.html");
  sesiones["contact.html"] = document.getElementById("contact.html");
}
function asignarEventos(){
	console.log("ENTRA A asignar eventos");
	var temp;
	for(var i in sesiones){
		temp = sesiones[i];
		temp.addEventListener("click",navegacion);
	}
}
function navegacion(event){
	console.log("ENTRA A navegacion");
    //console.log(event, target);
	var id = event.target.id;
	location.href= id;
	
}
