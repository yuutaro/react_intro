export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return (
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
  )
}