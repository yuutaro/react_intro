import { useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1 className="text-red-500 text-8xl">こんにちは</h1>
      <div className="border bg-gray-800 text-4xl text-white px-8 inline">{num}</div>
      <button onClick={countUp} className="border rounded-md bg-emerald-300 hover:bg-emerald-500">カウントアップ</button>
      <button onClick={countDown} className="border rounded-md bg-emerald-300 hover:bg-emerald-500">カウントダウン</button>
    </div>
  );
};