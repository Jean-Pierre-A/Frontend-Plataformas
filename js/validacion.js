
let Userlist = [];
let Username;
let Password ;
let Email;

function registerNewUser(usr,emil,pswrd) {
  
  let newUser = [],
    Username = usr,
    Password = pswrd,
    Email = emil;

  

  if (Username != "" && Password != "" && Email != "") {
    let pass = review(Username, Password,Email,1);
    if (pass == false) {
      newUser.push(Username, Password, Email);
      addInUserlist(newUser);
      alert("Registro exitoso");
      window.location.href = "api.html";
    } else {
      alert("Usuario ya registrado");
    }
  } else {
    alert("Ingrese todos los campos");
  }
}
function addInUserlist(pnewUser) {
  let Userlist = getUserlist();
  Userlist.push(pnewUser);
  localStorage.setItem("LSUserlist", JSON.stringify(Userlist));
}
function getUserlist() {
  
  let LocalUserlist = JSON.parse(localStorage.getItem("LSUserlist"));
  if (LocalUserlist == null) {
    LocalUserlist = Userlist;
  }
  return LocalUserlist;
}
function review(username, password,email,key) {
  let Userlist = getUserlist();
  let pass = false;

  for (let i = 0; i < Userlist.length; i++) {
    if (username == Userlist[i][0] && password == Userlist[i][1]) {
      if(key == 1){
        
      if(email == Userlist[i][2]){
      pass = true;
      }
    }else{
      pass = true;
    }
    }
  }
  return pass;
}

function login(usr,pswrd) {
  
  Username = usr;
  Password = pswrd;
  if (Username != "" && Password != "") {
    let pass = review(Username, Password,null,0);
    if (pass == true) {
      window.location.href = "api.html";
    } else {
      alert("Usuario no existe");
    }
  }else{
      alert('Ingrese todos los campos');
  }
}
function find_password(usr,emil){
  let Userlist = getUserlist();
   Username = usr;
   Email = emil;
  
  let Password = "";

  if (Username != "" && Email != "") {
    
    for(let i = 0; i<Userlist.length; i++){
      
      if (Username == Userlist[i][0] && Email == Userlist[i][2]) {
        
        Password ='es: '+ Userlist[i][1];
        break;
      }
      else{
        Password ='No se puedo recuperar, no se encontro el usuario';
      }
    }
    window.location.href ="/api.html";
    alert('Su contraseña  '+Password);
   
  }else{
      alert('Ingrese todos los campos');
  }
  
  
}
