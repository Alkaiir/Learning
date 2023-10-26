let formSwitch = () => {
    let formContainer = document.querySelector("#form__container");

    let pathInput = document.querySelector('#menu__input');

    let file = pathInput.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
       let string = reader.result;

       let json = JSON.parse(string);

       let form = document.createElement('form');
       form.setAttribute("id",json.name);

       // Генерация полей

       let fields = json.fields;

       for (let i = 0; i < fields.length; ++i) {
           let fieldsNth = fields[i];

           //Добавление label если они есть в JSON

           if (fieldsNth.label !== undefined) {
               let label = document.createElement('label');
               label.innerHTML = fieldsNth.label;
               form.append(label);
           }

           //Добавление input
           if ()
           let input = document.createElement('input');
           input.setAttribute('type', fieldsNth.input.type);
           form.append(input);

           //Добавление required если он есть в JSON

           if (fieldsNth.required !== undefined) {
               input.setAttribute('required');
           }

           //Добавление placeholder если он есть в JSON

           if (fieldsNth.input !== undefined ){
               input.setAttribute('placeholder', fieldsNth.input.placeholder);
           }

       }
        // Генерация ссылок

        // Генерация кнопок

        let buttons = json.buttons;

        for (let i = 0; i < buttons.length; ++i) {
            let buttonsNth = buttons[i];
            let button = document.createElement('button');
            button.innerHTML = buttonsNth.text;
            form.append(button);
        }



        formContainer.append(form);
    };
};


document.querySelector('#menu__input').addEventListener('change',formSwitch);



