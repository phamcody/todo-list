
export default function createProject(title, todo) {
    title;
    let todos = []
    todos.push(todo);
    return {
        title,
        todos
    }
}