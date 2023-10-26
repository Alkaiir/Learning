document.getElementById('menu__button').addEventListener('click', function(event) {event.preventDefault()})

 async function formSwitch  () {
    let pathInput = document.getElementById('menu__input').value;
    console.log('Путь до выбранного файла: ' + pathInput);
    let formContainer = document.getElementById("form__container");

    let response = await fetch(pathInput);
    let json = await response.json();
    console.log(json);

    let form = document.createElement('form');
    form.setAttribute("id",json.name);
}



