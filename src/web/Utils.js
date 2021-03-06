let username;
let role;

const reloadElements = () => {
  const options = {
    method: "GET",
  };
  fetch("/loadElements", options)
    .then((response) => response.json()) // konwersja na json
    .then(
      (data) => displayElements(data) // dane odpowiedzi z serwera
    );
};

const displayUser = (data) => {
  username = data.username;
  if (username == undefined) {
    alert("User does not exist or password is invalid.");
    return;
  }
  role = data.role;
  const welcomerCont = document.querySelector(".welcomer");
  welcomerCont.innerText = `Hi ${username}, nice to see you :)`;
  alert(`Hi ${username}, nice to see you :)`);
  displayAfterLogin();
};
