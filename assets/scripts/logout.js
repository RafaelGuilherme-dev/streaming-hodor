
function logout() {
  localStorage.removeItem("UsuarioLogado");
  let hlogout = document.querySelector("#hlogout");
  let hlogin = document.querySelector("#hlogin");
  let imgHamb = document.querySelector("#imgHamb");
  let hNameUser = document.querySelector("#hNameUser");

  hlogin.style.display = "block";
  hlogout.style.display = "none";
  hNameUser.style.display = "none";
  imgHamb.style.display = "block";
  imgAvatar.style.display = "none";
}
