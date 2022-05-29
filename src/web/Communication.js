window.onload = () => {

    const options = {
        method: "GET",
    };

    fetch("/loadElements", options)
        .then(response => response.json()) // konwersja na json
        .then(data => displayElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
}


document.querySelector('.confirm').addEventListener('click', () => {
    console.log('clicked')
    const data = JSON.stringify({
        method: document.querySelector('.method').value,
        username: document.querySelector('.userLogin').value,
        password: document.querySelector('.userPassword').value

    })
    const options = {
        method: "POST",
        body: data
    };

    fetch("/userUI", options)
        .then(response => response.json()) // konwersja na json
        .then(data => displayUser(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
})

document.querySelector('.addRecord').addEventListener('click', () => {
    const data = JSON.stringify({
        type: document.querySelector('.type').value,
        description: document.querySelector('.description').value
    })
    const options = {
        method: "POST",
        body: data
    };

    fetch("/addRecord", options)
        .then(response => response.json()) // konwersja na json
        .then(data => reloadElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
})

document.querySelector('.search').addEventListener('click', () => {
    const data = JSON.stringify({
        type: document.querySelector('.findByType').value,
    })
    const options = {
        method: "POST",
        body: data
    };

    fetch("/findByType", options)
        .then(response => response.json()) // konwersja na json
        .then(data => displayElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
})
document.querySelector('.reset').addEventListener('click', () => {

    const options = {
        method: "POST",
    };

    fetch("/reset", options)
        .then(response => response.json()) // konwersja na json
        .then(data => reloadElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
})

const removeElement = (elementId) => {
    const data = JSON.stringify({
        id: elementId
    })
    const options = {
        method: "POST",
        body: data
    };

    fetch("/removeElement", options)
        .then(response => response.json()) // konwersja na json
        .then(data => reloadElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
}


const adjustElement = (newType, newDescription, id) => {
    const data = JSON.stringify({
        id: id,
        type: newType,
        description: newDescription
    })
    const options = {
        method: "POST",
        body: data
    };

    fetch("/adjustElement", options)
        .then(response => response.json()) // konwersja na json
        .then(data => reloadElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));
}