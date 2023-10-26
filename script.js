document.getElementById('menu__button').addEventListener('click', function(event) {event.preventDefault()})

 async function formSwitch  () {

    let pathInput = document.getElementById('menu__input').value;
    console.log('Путь до выбранного файла: ' + pathInput);
    let formContainer = document.getElementById("form__container");

    console.log(formContainer);

    let response = await fetch(pathInput);
    let json = await response.json();
    console.log(json);



    let form = document.createElement('form');
    form.setAttribute("id",json.name);


    for (let i = 1; i < json.fields.length; ++i) {
       let label = document.createElement('label');
       label.innerHTML = json.fields[i-1].label;
       form.append(label);
       let input = document.createElement('input');
       input.setAttribute('type', json.fields[i-1].input.type)
       if (json.fields[i-1].input.required === true) {
          input.setAttribute('required', true);
       }
       form.append(input);
    }
    formContainer.append(form);
}



