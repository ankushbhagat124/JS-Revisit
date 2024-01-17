window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const inputText = document.querySelector("#new-task-input-text");
    const inputDate = document.querySelector("#new-task-input-date");
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        console.log('Submit Successful');
        const newTaskText = inputText.value;
        const newTaskDate = inputDate.value;

        // console.log(newTask);

        const newTaskEle = document.createElement("div");
        newTaskEle.classList.add("task");
        const newTaskContent = document.createElement("div");
        newTaskContent.classList.add("content");
        const newTaskInputText = document.createElement("input");
        newTaskInputText.classList.add("text");
        const newTaskInputDate = document.createElement("input");
        newTaskInputDate.classList.add("date");

        newTaskInputText.type = "text";
        newTaskInputText.value = newTaskText;
        newTaskInputText.setAttribute('readonly', 'readonly');
        newTaskInputDate.type = "text";
        newTaskInputDate.value = newTaskDate;
        newTaskInputDate.setAttribute('readonly', 'readonly');

        const newTaskActions = document.createElement("div");
        newTaskActions.classList.add("actions");
        const newTaskEditBtn = document.createElement("button");
        newTaskEditBtn.classList.add("edit");
        newTaskEditBtn.innerText = 'EDIT';
        const newTaskDelBtn = document.createElement("button");
        newTaskDelBtn.classList.add("delete");
        newTaskDelBtn.innerText = 'DELETE';
        const newTaskCalBtn = document.createElement("button");
        newTaskCalBtn.classList.add("calendar");
        newTaskCalBtn.innerText = 'Add to calendar';

        newTaskActions.appendChild(newTaskEditBtn);
        newTaskActions.appendChild(newTaskDelBtn);
        newTaskActions.appendChild(newTaskCalBtn);

        newTaskContent.append(newTaskInputText);
        newTaskContent.append(newTaskInputDate);
        newTaskEle.append(newTaskContent);
        newTaskEle.append(newTaskActions);
        list_el.append(newTaskEle);

        newTaskEditBtn.addEventListener('click', () =>{
            if (newTaskEditBtn.innerText == "EDIT"){
                newTaskInputText.removeAttribute('readonly');
                newTaskInputDate.removeAttribute('readonly');
                newTaskEditBtn.innerText = 'SAVE';
            }
            else{
                newTaskInputText.setAttribute('readonly', 'readonly');
                newTaskInputDate.setAttribute('readonly', 'readonly');
                newTaskEditBtn.innerText = 'EDIT';
            }
        })
        newTaskDelBtn.addEventListener('click', () =>{
            newTaskEle.remove();
        })
        newTaskCalBtn.addEventListener('click', () =>{

            let formattedEventDate = newTaskDate.split('-').reverse().join('');

            let googleCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE' +
                '&text=' + encodeURIComponent(newTaskText) +
                '&dates=' + encodeURIComponent(formattedEventDate + '/' + formattedEventDate);

            // Open Google Calendar in a new window/tab
            window.open(googleCalendarUrl, '_blank');
        })
    });

})