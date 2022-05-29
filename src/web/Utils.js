const reloadElements = (data) => {
    const options = {
        method: "GET",
    };
    fetch("/loadElements", options)
        .then(response => response.json()) // konwersja na json
        .then(data => displayElements(data) // dane odpowiedzi z serwera
            .catch(error => console.log(error)));

}


const displayUser = (data) => {
    let username = data.username
    let role = data.role
    const welcomerCont = document.querySelector('.welcomer')
    welcomerCont.innerText = `Welcomer ${username} to simple elements manager by Sniezka`
    alert(`Welcomer ${username} to simple elements manager`)
}