const displayElements = (data) => {
  const cont = document.querySelector(".elements");
  cont.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const id = data[i]._id;
    const type = data[i].type;
    const description = data[i].description;
    const timestamp = data[i].timestamp;

    const row = document.createElement("div");
    row.classList.add("row", "db");

    const idCont = document.createElement("div");
    idCont.classList.add("col-2");
    idCont.innerText = id;
    row.appendChild(idCont);
    const typeCont = document.createElement("div");
    typeCont.classList.add("col-2");
    typeCont.innerText = type;
    row.appendChild(typeCont);
    const descCont = document.createElement("div");
    descCont.classList.add("col-4");
    descCont.innerText = description;
    row.appendChild(descCont);
    const timeCont = document.createElement("div");
    timeCont.classList.add("col-2");
    timeCont.innerText = timestamp;
    row.appendChild(timeCont);
    const removeCont = document.createElement("div");
    const removeImg = document.createElement("img");
    removeImg.src = "img/u.gif";
    removeImg.classList.add("u");
    removeCont.classList.add("col-2", "end");
    removeCont.appendChild(removeImg);
    row.appendChild(removeCont);

    cont.appendChild(row);
  }

  removeElements();
  editElement();
};
