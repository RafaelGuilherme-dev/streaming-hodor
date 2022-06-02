const form = document.querySelector(".loginForm");
document.querySelector("#inputUsuario").value = '';
document.querySelector("#inputEmail").value = '';
document.querySelector("#inputSenha").value = '';

form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    let usuario = document.querySelector("#inputUsuario").value;
    let email = document.querySelector("#inputEmail").value;
    let senha = document.querySelector("#inputSenha").value;

    if (senha == '123') {
        fetch(`https://api.github.com/users/${usuario}`)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                else {
                    alert("Usuário Git não existente");
                    return Promise.reject(response);
                }
            })
            .then((data) => {

                let formValue = {
                    UserName: data.name != null ? data.name : data.login,
                    UserEmail: email,
                    Avatar: data.avatar_url,
                    UserGit: data.login
                }
                let textformValue = JSON.stringify(formValue);

                localStorage.setItem("UsuarioLogado", textformValue);

                alert('enviando..');

                form.submit();
            });
    }
    else {
        alert('Senha invalida!');
    }
});
