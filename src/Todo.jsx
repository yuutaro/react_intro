import { useState } from "react";

export const Todo = () => {
  // state
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO3"]);

  // function
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const omCliclAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }


  return (
    <div className=" bg-white">

      <div>
        <input placeholder="TODOを入力" className="input input-bordered w-full max-w-xs mx-2 my-4" value={todoText} onChange={onChangeTodoText} />
        <button onClick={omCliclAdd} className="btn btn-primary mx-4">追加</button>
      </div>

      <div className="flex flex-col items-center border mx-4 mt-4 rounded-lg shadow-xl bg-red-200">
        <p className=" text-4xl text-gray-600">未完了のTODO</p>
        <ul className="w-full">

          {incompleteTodos.map((todo, index) => (
            <li key={todo} className=" border bg-green-300 mx-4 my-2 rounded-md shadow-lg flex">
              <p className="text-4xl text-black mt-4">{todo}</p>
              <button onClick={() => onClickComplete(index)} className="btn btn-primary mx-4 right-4 mt-1 ">完了</button>
              <button onClick={() => onClickDelete(index)} className="btn btn-secondary mx-4 right-4 mt-1 ">削除</button>
            </li>
          ))}

        </ul>
      </div>

      <div className="flex flex-col items-center border mx-4 mt-4 rounded-lg shadow-xl bg-cyan-200">
        <p className=" text-4xl text-gray-700">完了したTODO</p>
        <ul className="w-full">

          {completeTodos.map((todo, index) => (
            <li key={todo} className=" border bg-green-300 mx-4 my-2 rounded-md shadow-lg flex">
              <p className="text-4xl text-black mt-4">{todo}</p>
              <button onClick={() => onClickBack(index)} className="btn btn-secondary mx-4 right-4 mt-1 ">戻す</button>
            </li>
          ))}

        </ul>
      </div>

      <div className="my-96 w-full h-screen"></div>
    </div>
  );
};