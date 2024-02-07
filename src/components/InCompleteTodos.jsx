export const InCompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;

  return (
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
  )
}