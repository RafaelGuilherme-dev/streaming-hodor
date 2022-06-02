$(function () {
    $("input.phone")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if (phone.length > 10) {
                element.mask("(99) 99999-999?9");
            } else {
                element.mask("(99) 9999-9999?9");
            }
        });

    class ValidForm {
        constructor() {
            this.formulario = document.querySelector('#formulario');
            this.eventos();
        }

        eventos() {
            this.formulario.addEventListener('submit', e => {
                this.handleSubmit(e);
            });
        }

        handleSubmit(e) {

            e.preventDefault();

            const fieldsValids = this.isValid();

            if (fieldsValids) {
                let nomeValue = $("#txtnome").val()
                let emailValue = $("#txtemail").val();
                let telefoneValue = $("#telefone").val();
                let assuntoValue = $("#txtassunto").val();;

                let formValue = {
                    name: nomeValue,
                    email: emailValue,
                    telefone: telefoneValue,
                    assunto: assuntoValue

                };

                let textformValue = JSON.stringify(formValue);
                localStorage.setItem("dadovenviado", textformValue);
                this.formulario.submit();
                alert('formulario enviado...');
            }
        }

        isValid() {
            let valid = true;

            var x = this.formulario.querySelectorAll('.Validar');

            for (let errorText of this.formulario.querySelectorAll('.error-text'))
                errorText.remove();

            for (let field of x) {
                const label = field.getAttribute('placeholder');

                if (!field.value) {
                    this.createError(field, `Campo "${label}" não pode está em branco`);
                    valid = false;
                }

                if (field.classList.contains('Nome')) {
                    if (!this.isValidUser(field)) valid = false;
                }
            }
            return valid;
        }

        createError(field, msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            field.insertAdjacentElement('afterend', div);
        }


        isValidUser(field) {
            const user = field.value;
            let valid = true;
            if (user.length < 3 || user.length > 15) {
                this.createError(field, 'Nome deve ter entre 3 a 15 caracteres');
                valid = false;
            }

            let regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
            let valido = user.split(/ +/).every(parte => regex.test(parte));

            if (!valido) {
                this.createError(field, 'Nome deve conter somente letra');
                valid = false;
            }
            return valid
        }


    }

    const valida = new ValidForm();
});

