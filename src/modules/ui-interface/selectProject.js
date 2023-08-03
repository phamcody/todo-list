import task from "./task";


export default function selectProject(projects) {
    let contentHeader = document.querySelector('.content-header');
    let choices = document.querySelectorAll('.choice');
    let contentButton = document.querySelector('.content-button');
    Array.from(choices).forEach(item => {
        item.addEventListener('click', () => {
            let previous = document.getElementById('selected');
            previous.removeAttribute('id', 'selected');
            item.setAttribute('id', 'selected');
            let current = document.getElementById('selected');
            contentHeader.textContent = current.textContent;
            task().placeTasks(projects);
            contentButton.disabled = false;

            let currentDate = new Date().toISOString().slice(0,10);
            for (let tasks in projects['Today']) {
                let index = projects['Today'].findIndex(item => item['date'] !== currentDate);
                if (index === -1) {
                    console.log('none');
                }
                else {
                    projects['Today'].splice(index, 1);
                }
            };

        })
    })
}