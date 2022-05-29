const removeElements = () => {
    const removeButtons = document.querySelectorAll('.u')
    console.log(removeButtons)
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', () => {
            const elementId = removeButtons[i].parentNode.parentNode.childNodes[0].innerText
            removeElement(elementId)
        })
    }
}