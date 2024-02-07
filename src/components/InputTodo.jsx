export const InputTodo = (props) => {
  const { todoText, onChange: onChangeTodoText, onClick: onClickAdd } = props;

  return (
    <div>
      <input placeholder="TODOを入力" className="input input-bordered w-full max-w-xs mx-2 my-4" value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd} className="btn btn-primary mx-4">追加</button>
    </div>
  )
}
