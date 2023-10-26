document.getElementById('menu__button').addEventListener('click', function(event) {event.preventDefault()});

 async function formSwitch  () {
    let formContainer = document.getElementById("form__container");



    let pathInput = document.getElementById('menu__input').value;
    console.log('Путь до выбранного файла: ' + pathInput);


    console.log(formContainer);

    let response = await fetch(pathInput);
    let json = await response.json();
    console.log(json);



    let form = document.createElement('form');
    form.setAttribute("id",json.name);

   // Добавление полей
    for (let i = 1; i < json.fields.length+1; ++i) {
       let label = document.createElement('label');
       label.innerHTML = json.fields[i-1].label;
       form.append(label);
       let input = document.createElement('input');
       input.setAttribute('type', json.fields[i-1].input.type)
       if (json.fields[i-1].input.required === true) {
          input.setAttribute('required', true);
       }
       if(json.fields[i-1].input.placeholder !== ''){
          input.setAttribute('placeholder', json.fields[i-1].input.placeholder);
       }
       form.append(input);
    }
   // // Добавление ссылок
   //  for (let i = 1; i < json.references.length+1; ++i) {
   //     let label = document.createElement('label');
   //     label.innerHTML = json.references[i-1].label;
   //     form.append(label);
   //     let input = document.createElement('input');
   //     input.setAttribute('type', json.references[i-1].input.type)
   //     if (json.references[i-1].input.required === true) {
   //        input.setAttribute('required', true);
   //     }
   //     form.append(input);
   //  }

    // Добавление кнопок
    for (let i = 1; i < json.buttons.length+1; ++i) {
       let button = document.createElement('button');
       button.innerHTML = json.buttons[i-1].text;
       button.className = 'button'
       form.append(button);
    }

    formContainer.append(form);

}



