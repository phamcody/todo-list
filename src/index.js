import createWebsite from "./modules/ui-interface/createWebsite";
import '../src/styles.css';

const projects = {
    All: [],
    Today: [],
    HighPriority: [],
};

/* const projects = {
    All: "",
    Today: "",
    HighPriority: "",

}

in some other place,
const key = projectName;
const value = todoTasks;

projects[key] = value;

*/
createWebsite(projects);
