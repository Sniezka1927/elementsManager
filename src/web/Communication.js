const displayAfterLogin = () => {
  const options = {
    method: "GET",
  };

  fetch("/loadElements", options)
    .then((response) => response.json())
    .then((data) => displayElements(data));
};

document.querySelector(".confirm").addEventListener("click", () => {
  const data = JSON.stringify({
    method: document.querySelector(".method").value,
    username: document.querySelector(".userLogin").value,
    password: document.querySelector(".userPassword").value,
  });
  const options = {
    method: "POST",
    body: data,
  };

  fetch("/userUI", options)
    .then((response) => response.json())
    .then((data) => displayUser(data));
});

document.querySelector(".addRecord").addEventListener("click", () => {
  if (role != "admin") {
    alert(
      "You are missing permissions to add elements, contact administrator."
    );
    displayAfterLogin();
    return;
  }
  const data = JSON.stringify({
    type: document.querySelector(".type").value,
    description: document.querySelector(".description").value,
  });
  const options = {
    method: "POST",
    body: data,
  };

  fetch("/addRecord", options)
    .then((response) => response.json())
    .then((data) => reloadElements(data));
});

document.querySelector(".search").addEventListener("click", () => {
  const data = JSON.stringify({
    type: document.querySelector(".findByType").value,
  });
  const options = {
    method: "POST",
    body: data,
  };

  fetch("/findByType", options)
    .then((response) => response.json())
    .then((data) => displayElements(data));
});
document.querySelector(".reset").addEventListener("click", () => {
  const options = {
    method: "POST",
  };

  fetch("/reset", options)
    .then((response) => response.json())
    .then((data) => reloadElements(data));
});

const removeElement = (elementId) => {
  const data = JSON.stringify({
    id: elementId,
  });
  const options = {
    method: "POST",
    body: data,
  };

  fetch("/removeElement", options)
    .then((response) => response.json())
    .then((data) => reloadElements(data));
};

const adjustElement = (newType, newDescription, id) => {
  const data = JSON.stringify({
    id: id,
    type: newType,
    description: newDescription,
  });
  const options = {
    method: "POST",
    body: data,
  };

  fetch("/adjustElement", options)
    .then((response) => response.json())
    .then((data) => reloadElements(data));
};
