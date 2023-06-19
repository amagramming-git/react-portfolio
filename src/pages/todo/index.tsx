import { useState } from "react"
import { Todo } from "../../components/Todo"
import TodoList from "../../components/TodoList"


export default function TodoPage() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState<Todo[]>([{ id: 0, text: "Todo1" }])
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
    const addTodoItem = () => {
        setTodos(state => [...state, { id: state.length, text: inputText }]);
        setInputText("")
    }
    return (
        <>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button onClick={addTodoItem}>追加</button>
            <TodoList todos={todos} />
        </>
    )
}