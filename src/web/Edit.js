const editElement = () => {
  const elements = document.querySelectorAll(".db");
  let selectedElements = 0;

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements[j].childNodes.length - 1; j++)
      elements[i].childNodes[j].addEventListener("click", () => {
        if (role != "admin") {
          alert(
            "You are missing permissions to edit elements, contact administrator."
          );
          return;
        }
        const typeCont = elements[i].childNodes[1];
        const descCont = elements[i].childNodes[2];
        const applyCont = elements[i].childNodes[4];
        const previousType = typeCont.innerText;
        const previousDescription = descCont.innerText;
        if (selectedElements == 0) {
          const select = document.createElement("select");
          const option01 = document.createElement("option");
          option01.innerText = "długopisy";
          select.appendChild(option01);
          const option02 = document.createElement("option");
          option02.innerText = "drukarki";
          select.appendChild(option02);
          const option03 = document.createElement("option");
          option03.innerText = "traktory";
          select.appendChild(option03);
          const option04 = document.createElement("option");
          option04.innerText = "akumulatory";
          select.appendChild(option04);
          const option05 = document.createElement("option");
          option05.innerText = "okna";
          select.appendChild(option05);
          const option06 = document.createElement("option");
          option06.innerText = "komputery";
          select.appendChild(option06);
          const option07 = document.createElement("option");
          option07.innerText = "lokale biurowe";
          select.appendChild(option07);
          select.value = previousType;

          typeCont.innerHTML = "";
          typeCont.appendChild(select);
          const description = document.createElement("input");
          description.type = "text";
          description.value = previousDescription;
          descCont.innerHTML = "";
          descCont.appendChild(description);

          selectedElements = 1;

          const apply = document.createElement("img");
          applyCont.innerHTML = "";
          apply.src = "./img/faja.png";
          applyCont.appendChild(apply);

          apply.addEventListener("click", () => {
            selectedElements = 0;
            const newType = select.value;
            const newDescription = description.value;
            const id = elements[i].childNodes[0].innerText;
            console.log(newType, newDescription);
            adjustElement(newType, newDescription, id);
          });
        }
      });
  }
};
