const submitBtn = document.querySelector("#submitBtn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#closeBtn");
const nameElem = document.querySelector("#name");
const getAge = document.querySelector("#age");

const openModal = () => (modal.style.display = "block");

const closeModal = () => {
  modal.style.display = "none";
  form.reset();
};

const showInfo = (name, age, birth, ed, gender) =>
  (modalContent.innerHTML = `<p>Ваше имя: ${name}</p>
  <p>Ваш возраст:${age}</p>
  <p>Ваша дата рождения: ${birth}</p>
  <p>Ваше образование: ${ed}</p>
    <p>Ваш пол: ${gender}</p>`);

const modalContent = document.querySelector(".modal__content");

const validation = (elem, error) => {
  if (!elem.value) {
    elem.style.outline = "3px solid red";
    error.style.display = "block";
    return false;
  }

  return true;
};

getAge.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (isNaN(age.value)) {
    age.style.outline = "3px solid red";

    return false;
  }
  age.style.outline = "3px solid green";

  return true;
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const nameElem = document.querySelector("#name");
  const getAge = document.querySelector("#age");
  const getDate = document.querySelector("#birth");
  const getEducation = document.querySelector("#ed");
  const gender = document.querySelector('input[name = "gender"]:checked').value;
  const errorText = document.querySelector(".error__text");
  if (validation(nameElem, age, errorText)) {
    nameElem.style.outline = "none";
    age.style.outline = "none";
    errorText.style.display = "none";
    openModal();
    showInfo(nameElem.value, age.value, birth.value, ed.value, gender);
  }
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__wrapper")) {
    closeModal();
  }
});
