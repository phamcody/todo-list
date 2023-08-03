export default function task(projects) {
    projects;
    return {
        createTaskForm() {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            let taskFormContainer = document.createElement('div');
            taskFormContainer.setAttribute('id', 'task-form-container');
            bottomContentContainer.appendChild(taskFormContainer);

            let form = document.createElement('form');
            form.classList.add('task-form');
            taskFormContainer.appendChild(form);


            let taskTitleContainer = document.createElement('div');
            taskTitleContainer.classList.add('form-container-input');
            let taskLabel = document.createElement('label');
            taskLabel.setAttribute('for', 'task-title');
            taskLabel.textContent = 'TASK';
            taskTitleContainer.appendChild(taskLabel);
            let taskTitle = document.createElement('input');
            taskTitle.classList.add('task-title');
            taskTitle.setAttribute('name', 'task-title');
            taskTitle.setAttribute('id', 'task-title');
            taskTitleContainer.appendChild(taskTitle);
            form.appendChild(taskTitleContainer);
            
            let notesTitleContainer = document.createElement('div');
            notesTitleContainer.classList.add('form-container-input');
            let notesLabel = document.createElement('label');
            notesLabel.textContent = 'NOTES';
            notesLabel.setAttribute('for', 'notes');
            notesTitleContainer.appendChild(notesLabel);
            let notes = document.createElement('input');
            notes.classList.add('notes');
            notes.setAttribute('name', 'notes');
            notes.setAttribute('id', 'notes');
            notesTitleContainer.appendChild(notes);
            form.appendChild(notesTitleContainer);

            let priorityTitleContainer = document.createElement('div');
            priorityTitleContainer.classList.add('form-container-input');
            let priorityLabel = document.createElement('label');
            priorityLabel.textContent = 'PRIORITY';
            priorityLabel.setAttribute('for', 'priority');
            priorityTitleContainer.appendChild(priorityLabel);
            let priority = document.createElement('select');
            priority.classList.add('priority');
            priorityTitleContainer.appendChild(priority);
            form.appendChild(priorityTitleContainer);


            let highPriority = document.createElement('option');
            highPriority.setAttribute('value', 'high');
            highPriority.textContent = 'High';
            let mediumPriority = document.createElement('option');
            mediumPriority.setAttribute('value', 'medium');
            mediumPriority.textContent = 'Medium';
            let lowPriority = document.createElement('option');
            lowPriority.setAttribute('value', 'low');
            lowPriority.textContent = 'Low';
            priority.appendChild(highPriority);
            priority.appendChild(mediumPriority);
            priority.appendChild(lowPriority);

            let dateTitleContainer = document.createElement('div');
            dateTitleContainer.classList.add('form-container-input');
            let dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'date');
            dateLabel.textContent = 'DUE DATE';
            dateTitleContainer.appendChild(dateLabel);
            let datesInput = document.createElement('input');
            datesInput.classList.add('date');
            datesInput.setAttribute('type', 'date');
            dateTitleContainer.appendChild(datesInput);
            form.appendChild(dateTitleContainer);

            let addButton = document.createElement('button');
            addButton.classList.add('form-add');
            addButton.setAttribute('type', 'button');
            addButton.textContent = 'ADD';

            form.appendChild(addButton);
        },

        add(projects) {
            let contentButton = document.querySelector('.content-button');
            let formAddButton = document.querySelector('.form-add');
            let taskName = document.querySelector('.task-title');
            let notesName = document.querySelector('.notes');
            let priorityName = document.querySelector('.priority');
            let dateName = document.querySelector('.date');
            formAddButton.addEventListener('click', () => {
                let selectedProject = document.getElementById('selected').textContent;
                let selectedProjectFix = selectedProject.replace(/\s+/g, "");
                let todo = {
                    task: "",
                    notes: "",
                    priority: "",
                    date: "",
                    project: "",
                }
                todo['task'] = taskName.value;
                todo['notes'] = notesName.value;
                todo['priority'] = priorityName.value;
                todo['date'] = dateName.value;
                todo['project'] = selectedProjectFix;
                let currentDate = new Date().toISOString().slice(0,10);
                console.log(currentDate);
                console.log(dateName.value);

                if (selectedProjectFix === "All") {
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    }
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    }
                }
                else if (selectedProjectFix === "HighPriority") {
                    projects['HighPriority'].push(todo);
                    projects['All'].push(todo);
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    }
                }
                else if (selectedProjectFix === "Today") {
                    projects['Today'].push(todo);
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    };
                }
                else {
                    projects[selectedProjectFix].push(todo);
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    };
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    };
                }
                contentButton.disabled = false;
                console.log(projects);
                task().removeForm();
                task().placeTasks(projects);
                
            });
        },

        removeForm() {
            let contentButton = document.querySelector('.content-button');
            contentButton.disabled = false;
            let taskFormContainer = document.querySelector('#task-form-container');
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            bottomContentContainer.removeChild(taskFormContainer);
        },


        // LOOP THRU THE SELECTED AND CREATE TASK ON EVERY 
        placeTasks(projects) {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            if (bottomContentContainer.hasChildNodes() === true) {
                while (bottomContentContainer.firstChild) {
                    bottomContentContainer.removeChild(bottomContentContainer.firstChild);
                }
            }
            let selected = document.querySelector('#selected').textContent;
            let selectedFix = selected.replace(/\s+/g, "");
            
            for (let tasks in projects[selectedFix]) {
                let taskContainer = document.createElement('div');
                taskContainer.classList.add('tasks-container');
                taskContainer.classList.add(selectedFix);
                bottomContentContainer.appendChild(taskContainer);

                let topTaskContainer = document.createElement('div');
                topTaskContainer.classList.add('top-task-container');
                taskContainer.appendChild(topTaskContainer);

                let title = document.createElement('div');
                title.textContent = projects[selectedFix][tasks]['task'];
                title.classList.add('tasks-title');

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'x';
                deleteButton.classList.add('delete-button');

                topTaskContainer.appendChild(title);
                topTaskContainer.appendChild(deleteButton);

                let noteCard = document.createElement('div');
                noteCard.classList.add('note-card');
                noteCard.textContent = projects[selectedFix][tasks]['notes'];
                taskContainer.appendChild(noteCard);

                let dateCard = document.createElement('div');
                dateCard.classList.add('date-card');
                dateCard.textContent = projects[selectedFix][tasks]['date'];
                taskContainer.appendChild(dateCard);

                if (projects[selectedFix][tasks]['priority'] === "high") {
                    taskContainer.classList.add('high');
                }
                else if (projects[selectedFix][tasks]['priority'] === "medium") {
                    taskContainer.classList.add('medium');
                }
                else {
                    taskContainer.classList.add('low');
                }

                deleteButton.addEventListener('click', (e) => {
                    task().deleteTasks(e.target, projects)
                })
            };
            
        },

        deleteTasks(e, projects) {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            let taskName = e.parentNode.firstChild.textContent;

            for (let project in projects) {
                console.log(project);
                let index = projects[project].findIndex(item => item['task'] === taskName);
                if (index === -1) {
                    console.log("N/A");
                }
                else {
                    projects[project].splice(index, 1);
                }
                console.log(index);
            }
            bottomContentContainer.removeChild(e.parentNode.parentNode);
            console.log(projects);
        },

    };
}