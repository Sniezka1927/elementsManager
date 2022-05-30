const removeElements = () => {
  const removeButtons = document.querySelectorAll(".u");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
      if (role != "admin") {
        alert(
          "You are missing permissions to remove elements, contact administrator."
        );
        return;
      }
      if (confirm("Are you sure you want to remove this record?")) {
        const elementId =
          removeButtons[i].parentNode.parentNode.childNodes[0].innerText;
        removeElement(elementId);
      } else {
        displayAfterLogin();
        return;
      }
    });
  }
};
