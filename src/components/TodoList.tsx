import { Todo } from "./Todo"

type TodoListProps = {
    todos: Todo[]
}
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    )
}
export default TodoList;