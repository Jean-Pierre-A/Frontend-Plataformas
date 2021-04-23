var sesiones = [];

window.onload = init;
function init(){
	console.log("ENTRA A INIT");
	asignarVariables();
	asignarEventos();
}
$(document).ready(function () {
  

  $("#js-main-slider")
    .pogoSlider({
      autoplay: true,
      autoplayTimeout: 1000,
      displayProgess: true,
      preserveTargetSize: true,
      targetWidth: 1000,
      targetHeight: 300,
      responsive: true,
    })
    .data("plugin_pogoSlider");

  var transitionDemoOpts = {
    displayProgess: false,
    generateNav: false,
    generateButtons: false,
  };

  $("#demo1").pogoSlider(transitionDemoOpts);
  $("#demo2").pogoSlider(transitionDemoOpts);
  $("#demo3").pogoSlider(transitionDemoOpts);
  $("#demo4").pogoSlider(transitionDemoOpts);
  $("#demo5").pogoSlider(transitionDemoOpts);
  $("#demo6").pogoSlider(transitionDemoOpts);
  $("#demo7").pogoSlider(transitionDemoOpts);
  $("#demo8").pogoSlider(transitionDemoOpts);
  $("#demo9").pogoSlider(transitionDemoOpts);
  $("#demo10").pogoSlider(transitionDemoOpts);
  $("#demo11").pogoSlider(transitionDemoOpts);
  $("#demo12").pogoSlider(transitionDemoOpts);
});
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

