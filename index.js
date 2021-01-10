
myBtn.onclick = function () {
  modal.style.display = "block";
  const getName = document.getElementById("name").value;
  const getAge = document.getElementById("num").value;
  const getDate = document.getElementById("start").value;
  const educ = document.getElementById("Ed").value;
  const getGender = document.getElementById("gender").value;
};
const modal = document.getElementById("myModal");
// const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
