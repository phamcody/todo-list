
export default function localStorageUpdate(projects) {
    projects;
    return {
        updateLocalStorage(projects) {
            let projectsJSON = JSON.stringify(projects);
            localStorage.setItem("user", projectsJSON);
            let storedProjectJSON = localStorage.getItem('user');
            let storedProject = JSON.parse(storedProjectJSON);
            console.log(storedProject)
            projects = storedProject;
        },
    }
}