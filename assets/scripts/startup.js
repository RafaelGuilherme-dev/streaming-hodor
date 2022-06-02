(() => {
    window.addEventListener("scroll", function () {
        document.querySelector(".nav").classList.toggle("active", window.scrollY > 0);
    });

    let textValue = localStorage.getItem("UsuarioLogado");
    let hlogout = document.querySelector("#hlogout");
    let hlogin = document.querySelector("#hlogin");
    let imgAvatar = document.querySelector("#imgAvatar");
    let imgHamb = document.querySelector("#imgHamb");
    let hNameUser = document.querySelector("#hNameUser");

    hlogin.style.display = "block";
    hlogout.style.display = "none";
    hNameUser.style.display = "none";
    imgHamb.style.display = "block";
    imgAvatar.style.display = "none";

    if (textValue != null && textValue.length > 0) {
        var user = JSON.parse(textValue);
        let hNameUser = document.querySelector("#hNameUser");
        let hlogout = document.querySelector("#hlogout");

        hlogin.style.display = "none";
        hlogout.style.display = "block";
        hNameUser.style.display = "block";
        hNameUser.textContent = user.UserName;
        imgHamb.style.display = "none";

        if (!user.avatar_url) {
            imgAvatar.style.display = "block";
            imgAvatar.src = user.Avatar;
        }

        if (user.UserGit)
            hNameUser.setAttribute("href", "https://github.com/" + user.UserGit);
        else
            hNameUser.setAttribute("href", "#");

    }
})();

