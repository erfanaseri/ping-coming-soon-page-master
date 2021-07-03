const error = document.querySelector(".form__error");
const button = document.querySelector(".form__button");
const email = document.querySelector(".form__e-mail");

error.classList.remove("form__error--active");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (!email.validity.valid) {
    button.classList.remove("form__button--active");
    error.classList.add("form__error--active");
  } else {
    button.classList.add("form__button--active");
    error.classList.remove("form__error--active");
  }
});
