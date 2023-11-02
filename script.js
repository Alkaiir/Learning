let formSwitch = () => {
    let oldFormContainer = document.querySelector("#form__container");
    oldFormContainer.remove();
    let div = document.createElement('div');
    div.setAttribute('id', 'form__container' );
    div.setAttribute('class', 'form__container');
    document.body.append(div);

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
       console.log(fields);
       for (let i = 0; i < fields.length; ++i) {
           let fieldsNth = fields[i];
            console.log(fieldsNth.input);
           //Добавление label если они есть в JSON

           if (fieldsNth.label !== undefined) {
               let label = document.createElement('label');
               label.innerHTML = fieldsNth.label;
               form.append(label);
           }

           //Добавление input
           if (fieldsNth.input.type === 'color'){
               let select = document.createElement('select');
               for (let i in fieldsNth.input.colors){
                   let option = document.createElement('option');
                   option.setAttribute('id', fieldsNth.input.colors[i]);
                   option.innerHTML = fieldsNth.input.colors[i];
                   select.append(option);
               }
               form.append(select);

           }

           if (fieldsNth.input.type === 'technology') {
               let select = document.createElement('select');

               if(fieldsNth.input.multiple !== undefined) {
                   select.setAttribute('multiple', true);
               }

               for (let i = 0 ; i < fieldsNth.input.technologies.length; ++i){
                   let option = document.createElement('option');
                   option.setAttribute('id', fieldsNth.input.technologies[i]);
                   option.innerHTML = fieldsNth.input.technologies[i];
                   select.append(option);
               }
               form.append(select);

           }

           if (fieldsNth.input.type !== undefined && fieldsNth.input.type !== 'color' && fieldsNth.input.type !== 'technology'){
               let input = document.createElement('input');
               input.setAttribute('type', fieldsNth.input.type);

               //Добавление required если он есть в JSON

               if (fieldsNth.input.required !== undefined) {
                   input.setAttribute('required', true);
               }

               //Добавление placeholder если он есть в JSON

               if (fieldsNth.input.placeholder !== undefined ){
                   input.setAttribute('placeholder', fieldsNth.input.placeholder);

               }

               //Добавление checked если он есть в JSON

               if (fieldsNth.input.checked !== undefined ){
                   input.setAttribute('checked', false);

               }

               form.append(input);
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



