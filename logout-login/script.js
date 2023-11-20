const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// --------------------------------------------------------------------
var dataAccound = [];
// đăng Kí
$("#form__SignUp").submit(function (e) {
  e.preventDefault();
  const data = {
    username: $("#usernameAccound").val(),
    password: $("#passwordAccound").val(),
  };
  dataAccound.push(data);
  localStorage.setItem("dataAccound", JSON.stringify(dataAccound));
  alert("Đăng kí thành công");
  setTimeout(() => {
    container.classList.remove("right-panel-active");
  }, 500);
});
//đăng nhập
$("#form__SignIn").submit(function (e) {
  var check;
  e.preventDefault();
  const data = {
    username: $("#usernameSignin").val(),
    password: $("#passwordSignin").val(),
  };
  console.log(data);
  dataAccoundSignIn = JSON.parse(localStorage.getItem("dataAccound"));
  console.log(dataAccoundSignIn);
  for (let i = 0; i < dataAccoundSignIn.length; i++) {
    if (
      dataAccoundSignIn[i].username === data.username &&
      dataAccoundSignIn[i].password === data.password
    ) {
      check = true;
      localStorage.setItem("checkSignIn", JSON.parse(check));
      window.location.href = "../admin/index.html";
      break;
    } else {
      check = false;
      localStorage.setItem("checkSignIn", JSON.parse(check));
      alert("Đăng nhập thất bại");
    }
  }
});
