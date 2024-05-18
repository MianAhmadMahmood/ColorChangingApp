import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('aqua');
  
  return (
    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
 

      { /*for red*/}
 <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'red' }}>
          Red
        </button>

        { /*for Orange*/}
 <button
          onClick={() => setColor('orange')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'orange' }}>
          Orange
        </button>


{/*for yellow*/}
<button
      onClick={()=> setColor("yellow")}
      className="outline-none px-4 py-1 rounded-full text-black  shadow-lg  mx-2"style={{backgroundColor:"Yellow"}} >Yellow</button>

{/*for Green*/}
<button
          onClick={() => setColor('green')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'green' }}>
          Green
        </button>

       {/*for blue*/}
<button
          onClick={() => setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'blue' }}>
          Blue
        </button>

{/*for indigo*/}
        <button
          onClick={() => setColor('indigo')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'indigo' }}>
          Indigo
        </button>

        {/*for violet*/}
        <button
          onClick={() => setColor('violet')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: 'violet' }}>
          Violet
        </button>

 {/*for Sky blue*/}
 <button
          onClick={() => setColor('	Skyblue')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg mx-2"
          style={{ backgroundColor: '	Skyblue' }}>
          	Sky blue
        </button>


        </div>
        </div>
    
    
  );
};

export default App;
