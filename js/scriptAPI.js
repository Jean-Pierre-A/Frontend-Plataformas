window.onload = init;
var resultado = document.getElementById("resultado");
function init() {
  if (resultado) {
    traerDatos();
  }
}
function traerDatos() {
  fetch("https://api.randomuser.me/?results=25")
    .then((response) => response.json())
    .then((data) => pintarDatos(data));
}
function pintarDatos(data) {
  
  
  var datos;
  var temp;
  var ans = "";
  console.log("xd");
  datos = data.results;
  console.log(data.results[0].name.first);
  for (var i in datos) {
    console.log("xd");
    temp = datos[i];
    ans+= "<div class='usuario'><img class='img-circle' src='"+temp.picture.large+"' />";
    ans+= "<p>";
    ans+= temp.name.first+" <br>"+temp.cell+"<br>Edad: "+temp.dob.age;
    ans+= "</p></div>";
  }

  resultado.innerHTML = ans;
}
