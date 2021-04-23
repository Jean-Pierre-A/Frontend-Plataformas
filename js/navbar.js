var sesiones = [];
window.onload = init;
function init(){
	console.log("ENTRA A INIT");
	asignarVariables();
	asignarEventos();
}

function asignarVariables() {
	console.log("ENTRA A asignar variables");
  sesiones["about.html"] = document.getElementById("about_road");
  sesiones["news.html"] = document.getElementById("news_road");
  sesiones["schedule.html"] = document.getElementById("schedule_road");
  sesiones["gallery.html"] = document.getElementById("gallery_road");
  sesiones["drivers.html"] = document.getElementById("drivers_road");
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
	var id = event.target.id;
	location.href= id;
	
}
