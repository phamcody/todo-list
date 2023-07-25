import addProjectDOM from "../ui-interface/addProjectDOM";

export default function addProjectToLibrary(projects, project, containerForProjects) {
    if (project === "" || projects.includes(project)) return
    else {
        projects.push(project);
        console.log(projects);
        addProjectDOM(containerForProjects, project, projects)
    }
}