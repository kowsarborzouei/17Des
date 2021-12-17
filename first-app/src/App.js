import './App.css';
import {useState} from "react";
import data, {makeRandomDomId} from "./data";


function App(id) {
    const [todoList, setTodoList] = useState(data)
    const handleAddTodoList = () => {
        const name = prompt('enter title')
        const description = prompt('enter description')
        setTodoList([...todoList, {id: makeRandomDomId(), name, description, item: []}])
    }
    const handleDeleteTodoList = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id))
    }
    const handleUpdateTodoListItemStatus = (todoID, itemid, e) => {
        setTodoList(todoList.map((todo) => todo.id === todoID ? {
            ...todo,
            item: todo.item.map((item) => item.id === itemid ? {...item, status: e.target.checked} : item),
        } : todo))
    }
    // const handleAddTodoItems=(id)=>{
    //     const title=prompt('enter title')
    //     setTodoList(
    //         todoList.map((item)=>[item.id===id?{...item,item,{id:makeRandomDomId(),title,status:false},]},:item)
    //     )
    //
    // }


return (
    <div className="App">
        {todoList.map((todo) => (
            <div className={'todo'} key={todo.id}>
                <h1>{todo.name}</h1>
                <p>{todo.description}</p>
                <button onClick={() => handleDeleteTodoList(todo.id)}>Delete</button>

                <ul>
                    {todo.item.map((item) => (
                        <li key={`${todo.id}-${item.id}`}>
                            <input onChange={(e)=>handleUpdateTodoListItemStatus(todo.id,item.id,e)}
                                type={'checkbox'}
                                checked={item.status}
                                id={`${todo.id}-${item.id}`}
                            />
                            <label htmlFor={`${todo.id}-${item.id}`}>{item.title}</label>
                        </li>
                    ))}
                </ul>
                <div>
                    <button>Add item</button>
                </div>
            </div>
        ))}
        <div>
            <button onClick={handleAddTodoList}>createTodo</button>
        </div>
    </div>
);

}

export default App;
