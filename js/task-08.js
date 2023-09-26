const form = document.querySelector('.login-form');
const input = document.querySelector('input');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    
    // if (input.value === "") {
    //     alert('Усі поля повинні бути заповнені!')
    // } else {
    //     const { email, password } = evt.currentTarget.elements;
    //     const data = {
    //         email: email.value,
    //         password: password.value,
    //     }

    //     console.log(data);
    // }
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert('Усі поля повинні бути заповнені!')
    } else {
        const formData = new FormData(evt.currentTarget);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(data);
    }

    evt.currentTarget.reset();
};
