import { useEffect, useState } from 'react';

export const App = () => {
  console.log('App rendered');
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const countUp = () => {
    setNum(num + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  const toggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log('useEffect');
    if (num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    };
  }, [num]);


  return (
    <div className="bg-slate-200">
      <h1 className="text-red-500 text-8xl">こんにちは</h1>
      <div className="border bg-gray-800 text-4xl text-white px-8 inline">{num}</div>
      <button onClick={countUp} className="btn btn-primary">カウントアップ</button>
      <button onClick={countDown} className="btn btn-secondary">カウントダウン</button>

      <button onClick={toggle} className='btn btn-primary'>on / off</button>
      {isShowFace ? <p className=' prose text-black text-4xl py-8'>(´・ω・｀)</p> : null}
      <div className=' mb-96 w-full h-96'></div>
    </div>
  );
};