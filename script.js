const container = document.querySelector(".container-fluid");
const formMain = document.createElement("form");
formMain.className = "form";
let arrayObj = [];
const header = document.querySelector("header");
/* -------------------------------------------------------------------------- */
/*                          div input ,label UserName                         */
/* -------------------------------------------------------------------------- */
const divUser = document.createElement("div");
const labelUser = document.createElement("label");

const inputUser = document.createElement("input");
inputUser.placeholder = "UserName...";
inputUser.id = "inputUser";
labelUser.htmlFor = "inputUser";
divUser.className = "mb-3";
labelUser.className = "form-label";
inputUser.className = "form-control";
inputUser.type = "text";
labelUser.append("UserName:");
divUser.append(labelUser);
divUser.append(inputUser);
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                        div , input password , label                        */
/* -------------------------------------------------------------------------- */
const divPass = document.createElement("div");
const labelPass = document.createElement("label");
const inputPass = document.createElement("input");
inputPass.placeholder = "password...";
labelPass.append("Password:");
inputPass.type = "password";
inputPass.id = "inputPass";
labelPass.htmlFor = "inputPass";
labelPass.className = "form-label";
inputPass.className = "form-control";
divPass.className = "mb-3";
divPass.append(labelPass);
divPass.append(inputPass);
/* -------------------------------------------------------------------------- */
/* ------------------------------ div button , ------------------------------ */
const divBtn = document.createElement("div");
const btnSumbit = document.createElement("button");
divBtn.className = "col-12";
btnSumbit.type = "submit";
btnSumbit.className = "btn btn-primary";
btnSumbit.innerHTML = "Login";
/* -------------------------------------------------------------------------- */
/*                           addEventListener button                          */
/* -------------------------------------------------------------------------- */
const divAlart = document.createElement("div");
formMain.addEventListener("submit", (e) => {
  e.preventDefault();

  const valueUser = inputUser.value;
  const valuePass = inputPass.value;
  // for(let element in )

  valueUser === "" && valuePass === ""
    ? console.log("khali")
    : (objData = { userName: valueUser, password: valuePass });

  arrayObj.push(objData);
  console.log(arrayObj);
  inputUser.value = "";
  inputPass.value = "";
  divAlart.className = "alert alert-danger";
  divAlart.role = "alert";
  valueUser === "" && valuePass === ""
    ? (divAlart.innerHTML = "empty😡😠")
    : alert(` welcome ${objData.userName} ${objData.password}`);
  setTimeout(() => {
    divAlart.remove();
  }, 1000);
  // const li = document.createElement("li");
  // li.innerHTML = ;
  // container.append(li);
  header.append(divAlart);
});
// divAlart.remove();
/* -------------------------------------------------------------------------- */
/* ----------------------------- //div button , ----------------------------- */
divBtn.append(btnSumbit);
formMain.append(divUser);
formMain.append(divPass);
formMain.append(divBtn);
container.append(formMain);
