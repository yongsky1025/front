import { useState } from 'react';
import type { SquareProps } from './types/type';

function Square({ value, handleClick }: SquareProps) {
  // const [input, setInput] = useState('');
  // alert() 띄우기 : 숫자가 보이도록
  // const handleClick = () => setInput('X');

  return (
    <>
      <div>
        <button className="square" onClick={handleClick}>
          {/* {input} */}
          {value}
        </button>
      </div>
    </>
  );
}

export default Square;
